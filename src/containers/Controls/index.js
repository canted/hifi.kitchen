import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {selectors as getQueue} from '../../stores/queue'
import {
  rateTrack,
  playNextTrack,
  playPrevTrack,
} from '../../stores/actions'

import Controls from '../../components/Controls'

class ControlsContainer extends Component {
  static propTypes = {
    track: PropTypes.shape({}),
    dispatch: PropTypes.func.isRequired,
  }

  constructor () {
    super()

    this.handlePrevTrack = this.handlePrevTrack.bind(this)
    this.handleNextTrack = this.handleNextTrack.bind(this)
    this.handleRateTrack = this.handleRateTrack.bind(this)
  }

  handleNextTrack () {
    const {dispatch} = this.props
    dispatch(playNextTrack())
  }

  handlePrevTrack () {
    const {dispatch} = this.props
    dispatch(playPrevTrack())
  }

  handleRateTrack (track, rating) {
    const {dispatch} = this.props
    dispatch(rateTrack(track, rating))
  }

  render () {
    const {track} = this.props

    if (track == null) {
      return null
    }

    return (
      <Controls
        track={track}
        onNextTrack={this.handleNextTrack}
        onPrevTrack={this.handlePrevTrack}
        onRateTrack={this.handleRateTrack}
      />
    )
  }
}

export default connect((state) => ({
  track: getQueue.track(state),
}))(ControlsContainer)

import React, {PropTypes} from 'react'

import './styles.css'

import Track from '../Track'

export default function TrackList (props) {
  const {tracks, onSelect, onPlexMix, onRate} = props

  return (
    <div className='TrackList'>
      {tracks.map((track, i) => (
        <div key={i} className='TrackList-track'>
          <Track
            track={track}
            onSelect={onSelect}
            onPlexMix={onPlexMix}
            onRate={onRate}
          />
        </div>
      ))}
    </div>
  )
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func,
  onPlexMix: PropTypes.func,
  onRate: PropTypes.func,
}

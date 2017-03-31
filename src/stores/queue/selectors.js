import {createSelector} from 'reselect'

import {selectPlex} from '../plex/instance'
import {selectAllTracks} from '../tracks/all'

export const root = (state) => state.queue

export const queueId = createSelector(
  root,
  (_root) => _root.id,
)

export const tracks = createSelector(
  root, selectAllTracks.values,
  (_root, allTracks) =>
  _root.items
    .filter((item) => allTracks.has(item.track))
    .map((item) => allTracks.get(item.track)),
)

export const selectedItemOffset = createSelector(
  root,
  (_root) => _root.selectedItemOffset,
)

export const queueItem = createSelector(
  root,
  (_root) => {
    const item = _root.items[_root.selectedItemOffset]
    if (item == null) {
      return null
    }
    return item
  },
)

export const trackId = createSelector(
  queueItem,
  (_item) => {
    if (_item == null) {
      return null
    }
    return _item.track
  }
)

export const track = createSelector(
  trackId, selectAllTracks.values,
  (_trackId, allTracks) => {
    return allTracks.get(_trackId) || null
  },
)

export const trackSrc = createSelector(
  track, selectPlex.library,
  (_track, library) => {
    if (library != null && _track != null) {
      return library.trackSrc(_track)
    }
    return null
  },
)

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const SAVE_TRACK_LIST = 'SAVE_TRACK_LIST'

// example complete request url => http://ws.audioscrobbler.com/2.0/?method=track.search&track=tarkan&api_key=dae91d2e755b5e29e7adf81d7897a7d0&format=json
export const api_key = 'dae91d2e755b5e29e7adf81d7897a7d0'
export const api_base_url =
  'http://ws.audioscrobbler.com/2.0/?method=track.search&'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  trackList: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case SAVE_TRACK_LIST:
      return {
        ...state,
        trackList: action.payload
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const saveTrackList = payload => {
  return dispatch => {
    dispatch({
      type: SAVE_TRACK_LIST,
      payload
    })
  }
}

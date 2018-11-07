import {
  handleActions
} from 'redux-actions'

const initialState = {
  info: 0
}

export const asyncFuns = handleActions ({
    TEST_ASYNC_FUNCTION: (state, {payload}) => {
      return {
        ...state,
        info: payload
      }
    },
  }, initialState
)
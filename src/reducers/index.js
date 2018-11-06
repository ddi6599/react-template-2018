import { combineReducers } from 'redux'
import * as common from './common'
import * as asyncFuns from './asyncExample'

export default combineReducers({
    ...common,
  ...asyncFuns
})

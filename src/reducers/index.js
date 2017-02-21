import { combineReducers } from 'redux'
import list from './list'
import history from './history'

export default combineReducers({
  list,
  history
})

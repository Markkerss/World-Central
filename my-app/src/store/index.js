import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store 
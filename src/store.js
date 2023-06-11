import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create the Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with rootReducer and applyMiddleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the rootSaga to start watching for actions
sagaMiddleware.run(rootSaga);

export default store;

import { combineReducers, createStore } from 'redux';
import { enhancer, reducers } from '@magento/peregrine';
import customReduceres from './redux_custom/categoriesList/categoryListReducers';
import newLaunchesReducer from './redux_custom/newLaunches/newLaunchesReducer';

// This is the connective layer between the Peregrine store and the
// venia-concept UI. You can add your own reducers/enhancers here and combine
// them with the Peregrine exports.
//
// example:
// const rootReducer = combineReducers({ ...reducers, ...myReducers });
// const rootEnhancer = composeEnhancers(enhancer, myEnhancer);
// export default createStore(rootReducer, rootEnhancer);
const rootReducer = combineReducers({...reducers, categories:customReduceres, newLaunches: newLaunchesReducer});

export default createStore(rootReducer, enhancer);

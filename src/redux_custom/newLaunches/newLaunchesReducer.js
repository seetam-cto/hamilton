import { GET_NEW_LAUNCHES, GET_NEW_LAUNCHES_FAILURE } from './newLaunchesType';

const newLaunchesState = {
    newLaunchesData: [],
    error: ''
}

const newLaunchesReducer = (state=newLaunchesState, action) => {
    switch(action.type) {
        case GET_NEW_LAUNCHES: return {
            ...state,
            newLaunchesData: action.payload,
            error: ''
        }
        case GET_NEW_LAUNCHES_FAILURE: return {
            ...state, 
            newLaunchesData: [],
            error: action.payload
        }
        default: return newLaunchesState
    }
}


export default newLaunchesReducer;
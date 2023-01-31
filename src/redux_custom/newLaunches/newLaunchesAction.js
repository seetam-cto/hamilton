import { GET_NEW_LAUNCHES, GET_NEW_LAUNCHES_FAILURE } from "./newLaunchesType";
import { useQuery } from "@apollo/client";
import { FETCH_NEW_LAUNCHES } from "../../components/NewLaunches/NewLaunches.gql";

export const fetchNewLaunches = () => {
    return (dispatch) => {
        const { loading, error, data } = useQuery(FETCH_NEW_LAUNCHES);
        if (!loading && !error && data) {
            dispatch(getNewLaunchesSuccess(data))
        } else if(error) {
            dispatch(getNewLaunchesFailure(error))
        }
    }
}

export const getNewLaunchesSuccess = (data) => {
    return {
        type: GET_NEW_LAUNCHES,
        payload: data
    }
}

export const getNewLaunchesFailure = (data) => {
    return {
        type: GET_NEW_LAUNCHES_FAILURE,
        payload: data
    }
}
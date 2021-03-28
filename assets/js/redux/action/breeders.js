import {request} from "../../agent";
import {
    ADD_BREEDER,
    BREEDERS_LIST_ERROR,
    BREEDERS_LIST_RECEIVED,
    BREEDERS_LIST_REQUEST,
    BREEDER_ERROR,
    BREEDER_RECEIVED,
    BREEDER_REQUEST,
    BREEDER_UNLOAD
} from "./constans";

export const breedersListRequest = () => ({
    type: BREEDERS_LIST_REQUEST,
})

export const breedersListError = (error) => ({
    type: BREEDERS_LIST_ERROR,
    error
})

export const breedersListReceived = (payload) => ({
    type: BREEDERS_LIST_RECEIVED,
    payload
})

export const breedersListFetch = () => {
    return (dispatch) => {
        dispatch(breedersListRequest());
        return request.get('/breeders')
            .then(response => dispatch(breedersListReceived(response)))
            .catch(error => dispatch(breedersListError(error)));
    }
}

export const breederRequest = () => ({
    type: BREEDER_REQUEST,
})

export const breederError = (error) => ({
    type: BREEDER_ERROR,
    error
})

export const breederReceived = (data) => ({
    type: BREEDER_RECEIVED,
    data
})

export const breederUnload = () => ({
    type: BREEDER_UNLOAD,
})


export const breederFetch = (id) => {
    return (dispatch) => {
        dispatch(breederRequest());
        return request.get(`/breeders/${id}`, true)
            .then(response => dispatch(breederReceived(response)))
            .catch(error => dispatch(breederError(error)))
    }
}

export const breederAdded = (payload) => ({
    type: ADD_BREEDER,
    payload
})

export const addBreeder = (payload) => {
    return (dispatch) => {
        return request.post(`/breeders`,
            payload
            ).then(response => dispatch(breederAdded(response)))
    }
}
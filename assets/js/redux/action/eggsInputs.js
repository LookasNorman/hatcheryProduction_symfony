import {request} from "../../agent";
import {
    ADD_INPUTS,
    INPUTS_LIST_ERROR,
    INPUTS_LIST_RECEIVED,
    INPUTS_LIST_REQUEST,
    INPUTS_ERROR,
    INPUTS_RECEIVED,
    INPUTS_REQUEST,
    INPUTS_UNLOAD
} from "./constans";

export const inputsListRequest = () => ({
    type: INPUTS_LIST_REQUEST,
})

export const inputsListError = (error) => ({
    type: INPUTS_LIST_ERROR,
    error
})

export const inputsListReceived = (payload) => ({
    type: INPUTS_LIST_RECEIVED,
    payload
})


export const inputsListFetch = () => {
    return (dispatch) => {
        dispatch(inputsListRequest());
        return request.get(`/eggs_inputs`)
            .then(response => dispatch(inputsListReceived(response)))
            .catch(error => dispatch(inputsListError(error)));
    }
}

export const inputsAdded = (payload) => ({
    type: ADD_INPUTS,
    payload
})

export const addInputs = (payload) => {
    return (dispatch) => {
        return request.post(`/eggs_inputs`, payload)
            .then(response => dispatch(inputsAdded(response)))
    }
}

export const eggsInputsRequest = () => ({
    type: INPUTS_REQUEST,
})

export const eggsInputsError = (error) => ({
    type: INPUTS_ERROR,
    error
})

export const eggsInputsReceived = (data) => ({
    type: INPUTS_RECEIVED,
    data
})

export const eggsInputsUnload = () => ({
    type: INPUTS_UNLOAD,
})


export const eggsInputsFetch = (id) => {
    return (dispatch) => {
        dispatch(eggsInputsRequest());
        return request.get(`/eggs_inputs/${id}`, true)
            .then(response => dispatch(eggsInputsReceived(response)))
            .catch(error => dispatch(eggsInputsError(error)))
    }
}

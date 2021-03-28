import {request} from "../../agent";
import {
    ADD_HERD,
    HERDS_LIST_ERROR,
    HERDS_LIST_RECEIVED,
    HERDS_LIST_REQUEST,
    HERD_ERROR,
    HERD_RECEIVED,
    HERD_REQUEST,
    HERD_UNLOAD,
    HERDS_LIST_UNLOAD
} from "./constans";

export const herdsListRequest = () => ({
    type: HERDS_LIST_REQUEST,
})

export const herdsListError = (error) => ({
    type: HERDS_LIST_ERROR,
    error
})

export const herdsListReceived = (payload) => ({
    type: HERDS_LIST_RECEIVED,
    payload
})

export const herdsListUnload = () => ({
    type: HERDS_LIST_UNLOAD,
})

export const herdsListFetch = (id) => {
    return (dispatch) => {
        dispatch(herdsListRequest());
        return request.get(`/breeders/${id}/herds`)
            .then(response => dispatch(herdsListReceived(response)))
            .catch(error => dispatch(herdsListError(error)));
    }
}

export const herdRequest = () => ({
    type: HERD_REQUEST,
})

export const herdError = (error) => ({
    type: HERD_ERROR,
    error
})

export const herdReceived = (data) => ({
    type: HERD_RECEIVED,
    data
})

export const herdUnload = () => ({
    type: HERD_UNLOAD,
})

export const herdFetch = (id) => {
    return (dispatch) => {
        dispatch(herdRequest());
        return request.get(`/herds/${id}`)
            .then(response => dispatch(herdReceived(response)))
            .catch(error => dispatch(herdError(error)))
    }
}

export const addHerd = (payload) => ({
    type: ADD_HERD,
    payload: {
        id: Math.floor(Math.random() * 100 + 3),
        name: "LOOKAS",
        email: 'g@test.pl',
        phoneNumber: "662049921",
    }
})
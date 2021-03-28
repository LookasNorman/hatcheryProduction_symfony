import {request} from "../../agent";
import {
    ADD_DELIVERY,
    DELIVERY_LIST_ERROR,
    DELIVERY_LIST_RECEIVED,
    DELIVERY_LIST_REQUEST,
    DELIVERY_LIST_UNLOAD
} from "./constans";

export const deliveryListRequest = () => ({
    type: DELIVERY_LIST_REQUEST,
})

export const deliveryListError = (error) => ({
    type: DELIVERY_LIST_ERROR,
    error
})

export const deliveryListReceived = (payload) => ({
    type: DELIVERY_LIST_RECEIVED,
    payload
})

export const deliveryListUnload = () => ({
    type: DELIVERY_LIST_UNLOAD,
})

export const deliveryListFetch = (id) => {
    return (dispatch) => {
        dispatch(deliveryListRequest());
        return request.get(`/herds/${id}/eggs_deliveries`)
            .then(response => dispatch(deliveryListReceived(response)))
            .catch(error => dispatch(deliveryListError(error)));
    }
}

export const deliveryAdded = (payload) => ({
    type: ADD_DELIVERY,
    payload
})


export const addDelivery = (payload) => {
    return (dispatch) => {
        return request.post(`/eggs_deliveries`,
            payload
        ).then(response => dispatch(deliveryAdded(response)))
    }
}
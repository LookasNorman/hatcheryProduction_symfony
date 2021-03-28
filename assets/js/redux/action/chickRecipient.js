import {request} from "../../agent";
import {
    ADD_CHICK_RECIPIENT,
    CHICK_RECIPIENTS_LIST_ERROR,
    CHICK_RECIPIENTS_LIST_RECEIVED,
    CHICK_RECIPIENTS_LIST_REQUEST,
    CHICK_RECIPIENT_ERROR,
    CHICK_RECIPIENT_RECEIVED,
    CHICK_RECIPIENT_REQUEST,
    CHICK_RECIPIENT_UNLOAD
} from "./constans";

export const chickRecipientsListRequest = () => ({
    type: CHICK_RECIPIENTS_LIST_REQUEST,
})

export const chickRecipientsListError = (error) => ({
    type: CHICK_RECIPIENTS_LIST_ERROR,
    error
})

export const chickRecipientsListReceived = (payload) => ({
    type: CHICK_RECIPIENTS_LIST_RECEIVED,
    payload
})

export const chickRecipientsListFetch = () => {
    return (dispatch) => {
        dispatch(chickRecipientsListRequest());
        return request.get('/chick_recipients')
            .then(response => dispatch(chickRecipientsListReceived(response)))
            .catch(error => dispatch(chickRecipientsListError(error)));
    }
}

export const chickRecipientRequest = () => ({
    type: CHICK_RECIPIENT_REQUEST,
})

export const chickRecipientError = (error) => ({
    type: CHICK_RECIPIENT_ERROR,
    error
})

export const chickRecipientReceived = (data) => ({
    type: CHICK_RECIPIENT_RECEIVED,
    data
})

export const chickRecipientUnload = () => ({
    type: CHICK_RECIPIENT_UNLOAD,
})


export const chickRecipientFetch = (id) => {
    return (dispatch) => {
        dispatch(chickRecipientRequest());
        return request.get(`/chick_recipients/${id}`, true)
            .then(response => dispatch(chickRecipientReceived(response)))
            .catch(error => dispatch(chickRecipientError(error)))
    }
}

export const chickRecipientAdded = (payload) => ({
    type: ADD_CHICK_RECIPIENT,
    payload
})

export const addChickRecipient = (payload) => {
    return (dispatch) => {
        return request.post(`/chick_recipients`,
            payload
        ).then(response => dispatch(chickRecipientAdded(response)))
    }
}
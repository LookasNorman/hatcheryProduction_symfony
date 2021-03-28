import {
    CHICK_RECIPIENT_ERROR,
    CHICK_RECIPIENT_RECEIVED,
    CHICK_RECIPIENT_REQUEST,
    CHICK_RECIPIENT_UNLOAD
} from "../action/constans";

const chickRecipient = (state = {
    chickRecipient: null, isFetching: false
}, action) => {
    switch (action.type) {
        case CHICK_RECIPIENT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CHICK_RECIPIENT_RECEIVED:
            return {
                ...state,
                chickRecipient: action.data,
                isFetching: false
            }
        case CHICK_RECIPIENT_ERROR:
            return {
                ...state,
                isFetching: false,
                chickRecipient: null
            }
        case CHICK_RECIPIENT_UNLOAD:
            return {
                ...state,
                isFetching: false,
                chickRecipient: null
            }
        default:
            return state;
    }
}

export default chickRecipient;
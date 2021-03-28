import {
    ADD_CHICK_RECIPIENT,
    CHICK_RECIPIENTS_LIST_ERROR,
    CHICK_RECIPIENTS_LIST_RECEIVED,
    CHICK_RECIPIENTS_LIST_REQUEST} from "../action/constans";

const chickRecipientsList = (state = {
    chickRecipients: null, isFetching: false
}, action) => {
    switch (action.type) {
        case CHICK_RECIPIENTS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CHICK_RECIPIENTS_LIST_RECEIVED:
            return {
                ...state,
                chickRecipients: action.payload['hydra:member'],
                isFetching: false
            }
        case CHICK_RECIPIENTS_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                chickRecipients: null
            }
        case ADD_CHICK_RECIPIENT:
            return {
                ...state,
                chickRecipients: state.chickRecipients ? state.chickRecipients.concat(action.payload) : state.chickRecipients
            }
        default:
            return state;
    }
}

export default chickRecipientsList;
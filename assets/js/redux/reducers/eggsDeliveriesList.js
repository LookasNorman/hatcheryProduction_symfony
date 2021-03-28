import {ADD_DELIVERY, DELIVERY_LIST_ERROR, DELIVERY_LIST_RECEIVED, DELIVERY_LIST_REQUEST} from "../action/constans";

const eggsDeliveriesList = (state = {
    deliveries: null, isFetching: false
}, action) => {
    switch (action.type) {
        case DELIVERY_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case DELIVERY_LIST_RECEIVED:
            return {
                ...state,
                deliveries: action.payload['hydra:member'],
                isFetching: false
            }
        case DELIVERY_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                deliveries: null
            }
        case ADD_DELIVERY:
            return {
                ...state,
                deliveries: state.deliveries ? state.deliveries.concat(action.payload) : state.deliveries
            }
        default:
            return state;
    }
}

export default eggsDeliveriesList;
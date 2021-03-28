import {ADD_BREEDER, BREEDERS_LIST_ERROR, BREEDERS_LIST_RECEIVED, BREEDERS_LIST_REQUEST} from "../action/constans";

const breedersList = (state = {
    breeders: null, isFetching: false
}, action) => {
    switch (action.type) {
        case BREEDERS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case BREEDERS_LIST_RECEIVED:
            return {
                ...state,
                breeders: action.payload['hydra:member'],
                isFetching: false
            }
        case BREEDERS_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                breeders: null
            }
        case ADD_BREEDER:
            return {
                ...state,
                breeders: state.breeders ? state.breeders.concat(action.payload) : state.breeders
            }
        default:
            return state;
    }
}

export default breedersList;
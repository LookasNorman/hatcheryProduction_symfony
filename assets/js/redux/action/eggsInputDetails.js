import {request} from "../../agent";
import {
    ADD_INPUT_DETAILS,
} from "./constans";

export const inputDetailsAdded = (payload) => ({
    type: ADD_INPUT_DETAILS,
    payload
})

export const addInputDetails = (payload) => {
    return (dispatch) => {
        return request.post(`/eggsInputDetails/addDelivery`, payload)
            .then(response => dispatch(inputDetailsAdded(response)))
    }
}

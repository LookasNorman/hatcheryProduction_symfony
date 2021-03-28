import {request} from "../../agent";
import {
    USER_LOGIN_SUCCESS
} from "./constans";

export const userLoginSuccess = (token, userId) => {
    return {
        type: USER_LOGIN_SUCCESS,
        token,
        userId
    }
}

export const userLoginAttempt = (username, password) => {
    return (dispatch) => {
        return request.post('/login_check', {username, password}, false)
            .then(response => dispatch(userLoginSuccess(response.token, response.id)))
            .catch(() => {console.log('Login failed');})
    }
}
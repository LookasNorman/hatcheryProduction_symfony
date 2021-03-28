import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "./form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../../redux/action/login";

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
  userLoginAttempt
};

class LoginForm extends Component {
    onSubmit(values) {
        return this.props.userLoginAttempt(
            values.username,
            values.password
        )
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="text-center">
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="username" label="Użytkownik" type="text" component={renderField} />
                    <Field name="password" label="Hasło" type="password" component={renderField} />
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg">Zaloguj</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
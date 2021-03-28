import React, {Component} from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {renderField} from "../basic/form";
import {connect} from "react-redux";
import {addBreeder} from "../../redux/action/breeders";


const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    addBreeder
};

class NewBreeder extends Component {
    onSubmit(values) {
        const {addBreeder, reset} = this.props;
        return addBreeder(values).then(() => reset())
    }
    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div className="text-center">
                <h3>Dodaj nowego dostawcę</h3>
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="name" label="Nazwa" type="text" component={renderField} />
                    <Field name="email" label="Email" type="text" component={renderField} />
                    <Field name="phoneNumber" label="Numer telefonu" type="text" component={renderField} />
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                            Dodaj dostawcę
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewBreeder'
})(connect(mapStateToProps, mapDispatchToProps)(NewBreeder));
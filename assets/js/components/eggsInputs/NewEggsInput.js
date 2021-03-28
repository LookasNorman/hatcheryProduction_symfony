import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, renderSelect} from "../basic/form";
import {connect} from "react-redux";
import {inputsListFetch, addInputs} from "../../redux/action/eggsInputs";

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    addInputs
};

class NewEggsInput extends Component {

    onSubmit(values) {
        const {addInputs, reset} = this.props;
        return addInputs(values).then(() => reset())
    }


    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="text-center">
                <h3>Dodaj nowy nakład</h3>
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="name" label="Nazwa nakładu" type="text" component={renderField}/>
                    <Field name="inputDate" label="Data nakładu" type="date" component={renderField}/>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                            Dodaj nowy nakład
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewEggsInput'
})(connect(mapStateToProps, mapDispatchToProps)(NewEggsInput));
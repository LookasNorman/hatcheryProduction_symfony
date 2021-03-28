import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, renderSelectCustom, renderSelect} from "../basic/form";
import {connect} from "react-redux";
import {breedersListFetch} from "../../redux/action/breeders";
import {chickRecipientsListFetch} from "../../redux/action/chickRecipient";
import {addInputDetails} from "../../redux/action/eggsInputDetails";

const mapStateToProps = state => ({
    ...state.breeders,
    ...state.chickRecipients
});

const mapDispatchToProps = {
    addInputDetails,
    breedersListFetch,
    chickRecipientsListFetch
};

class NewEggsInputDetails extends Component {
    componentDidMount() {
        this.props.breedersListFetch()
        this.props.chickRecipientsListFetch()
    }

    onSubmit(values) {
        const {addInputDetails, reset} = this.props;
        return addInputDetails(values).then(() => reset())
    }


    render() {
        const {handleSubmit, submitting, breeders, eggsInputDetails, chickRecipients} = this.props;

        return (
            <div className="text-center">
                <h3>Dodaj jaja do nakładu</h3>
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="eggsInput" label="Nakład" option={eggsInputDetails} component={renderSelectCustom}/>
                    <Field name="breederId" label="Dostawca" component={renderSelectCustom} option={breeders}/>
                    <Field name="eggs" label="Ilość jaj do nakładu" type="text"  component={renderField} parse={value => parseInt(value)}/>
                    <Field name="chickRecipient" label="Odbiorca piskląt" component={renderSelectCustom} option={chickRecipients}/>
                    <Field name="chickNumber" label="Ilość piskląt" type="text" component={renderField} parse={value => parseInt(value)}/>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                            Dodaj szczegóły nakładu
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewEggsInputDetails'
})(connect(mapStateToProps, mapDispatchToProps)(NewEggsInputDetails));
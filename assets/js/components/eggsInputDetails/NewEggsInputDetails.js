import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, renderSelect} from "../basic/form";
import {connect} from "react-redux";
import {breedersListFetch} from "../../redux/action/breeders";


const mapStateToProps = state => ({
    ...state.breeders,
});

const mapDispatchToProps = {
    breedersListFetch,
};

class NewEggsInputDetails extends Component {
    componentDidMount() {
        this.props.breedersListFetch()
    }

    onSubmit(values) {
        const {addDelivery, reset} = this.props;
        return addDelivery(values).then(() => reset())
    }


    render() {
        const {handleSubmit, submitting, breeders, eggsInputDetails} = this.props;

        return (
            <div className="text-center">
                <h3>Dodaj jaja do nakładu</h3>
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="eggsInput" label="Nakład" option={eggsInputDetails} component={renderSelect}/>
                    <Field name="breederId" label="Dostawca" component={renderSelect} option={breeders}/>
                    <Field name="eggs" label="Ilość jaj do nakładu" type="text" component={renderField}/>
                    <Field name="chickRecipient" label="Odbiorca piskląt" type="text" component={renderField}/>
                    <Field name="chickNumber" label="Ilość piskląt" type="text" component={renderField}/>
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
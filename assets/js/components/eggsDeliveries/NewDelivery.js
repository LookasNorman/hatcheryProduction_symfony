import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, renderSelect} from "../basic/form";
import {connect} from "react-redux";
import {breedersListFetch} from "../../redux/action/breeders";
import {addDelivery} from "../../redux/action/eggsDeliveries";
import {herdsListFetch} from "../../redux/action/herds";


const mapStateToProps = state => ({
    ...state.breeders,
    ...state.herds
});

const mapDispatchToProps = {
    addDelivery,
    breedersListFetch,
    herdsListFetch
};

class NewDelivery extends Component {
    componentDidMount() {
        this.props.breedersListFetch()
    }

    onSubmit(values) {
        const {addDelivery, reset} = this.props;
        return addDelivery(values).then(() => reset())
    }

    onChange(values) {
        const {herdsListFetch} = this.props;
        herdsListFetch(values.target.value.substring(14));
    }

    render() {
        const {handleSubmit, submitting, breeders, herds} = this.props;

        return (
            <div className="text-center">
                <h3>Dodaj nową dostawę</h3>
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="deliveryDate" label="Data dostawy" type="date" component={renderField}/>
                    <Field name="breeder" label="Dostawca" component={renderSelect} option={breeders} onChange={this.onChange.bind(this)}/>
                    <Field name="herd" label="Stado" component={renderSelect} option={herds}/>
                    <Field name="eggsNumber" label="Ilość jaj" type="number" component={renderField}
                           parse={value => parseInt(value)}/>
                    <Field name="startLayingDate" label="Data zniesienia od" type="date" component={renderField}/>
                    <Field name="endLayingDate" label="Data zniesienia do" type="date" component={renderField}/>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                            Dodaj dostawę jaj
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewDelivery'
})(connect(mapStateToProps, mapDispatchToProps)(NewDelivery));
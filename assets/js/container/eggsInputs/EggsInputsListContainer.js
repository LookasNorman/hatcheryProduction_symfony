import React, {Component} from "react";
import {connect} from "react-redux";
import EggsInputsList from "../../components/eggsInputs/EggsInputsList";
import {inputsListFetch} from "../../redux/action/eggsInputs";
import NewEggsInput from "../../components/eggsInputs/NewEggsInput";

const mapStateToProps = state => ({
    ...state.eggsInputs
})

const mapDispatchToProps = {
    inputsListFetch,
}

class EggsInputsListContainer extends Component {
    componentDidMount() {
        this.props.inputsListFetch()
    }

    componentWillUnmount() {
    }

    render() {
        const {eggsInputs, isFetching} = this.props;
        return (
            <>
                <NewEggsInput/>
                <EggsInputsList eggsInputs={eggsInputs} isFetching={isFetching}/>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggsInputsListContainer);
import React, {Component} from "react";
import {eggsInputsFetch, eggsInputsUnload} from "../../redux/action/eggsInputs";
import {connect} from "react-redux";
import {Row} from "../../components/eggsInputs/EggsInputsRow";
import {CircularProgress} from "@material-ui/core";
import EggsInput from "../../components/eggsInputs/EggsInput";

const mapStateToProps = state => ({
    ...state.eggsInput
})

const mapDispatchToProps = {
    eggsInputsFetch,
    eggsInputsUnload
}

class EggsInputContainer extends Component {
    componentDidMount() {
        this.props.eggsInputsFetch(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.eggsInputsUnload()
    }

    render() {
        const {eggsInput, isFetching} = this.props;

        return (
            <EggsInput eggInput={eggsInput} isFetching={isFetching}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggsInputContainer);
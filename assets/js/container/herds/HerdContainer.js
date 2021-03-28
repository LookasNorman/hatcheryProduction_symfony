import React, {Component} from "react";
import {herdFetch, herdUnload} from "../../redux/action/herds";
import {connect} from "react-redux";
import Herd from "../../components/herds/Herd";
import EggsDeliveriesListContainer from "../eggsDeliveries/EggsDeliveriesListContainer";

const mapStateToProps = state => ({
    ...state.herd
})

const mapDispatchToProps = {
    herdFetch,
    herdUnload
}

class HerdContainer extends Component {
    componentDidMount() {
        this.props.herdFetch(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.herdUnload()
    }

    render() {
        const {herd, isFetching} = this.props;
        return (
            <>
                <Herd herd={herd} isFetching={isFetching} />
                <EggsDeliveriesListContainer herdId={this.props.match.params.id}/>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HerdContainer)
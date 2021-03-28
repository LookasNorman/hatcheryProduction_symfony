import React, {Component} from "react";
import {connect} from "react-redux";
import {deliveryListFetch, deliveryListUnload} from "../../redux/action/eggsDeliveries";
import EggsDeliveriesList from "../../components/eggsDeliveries/EggsDeliveriesList";

const mapStateToProps = state => ({
    ...state.deliveries
})

const mapDispatchToProps = {
    deliveryListFetch,
    deliveryListUnload
}

class EggsDeliveriesListContainer extends Component {
    componentDidMount() {
        this.props.deliveryListFetch(this.props.herdId)
    }

    componentWillUnmount() {
        this.props.deliveryListUnload()
    }

    render() {
        const {deliveries, isFetching} = this.props;

        return (
            <EggsDeliveriesList deliveries={deliveries} isFetching={isFetching}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggsDeliveriesListContainer);
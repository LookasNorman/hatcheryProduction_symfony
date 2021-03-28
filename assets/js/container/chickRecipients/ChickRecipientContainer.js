import React, {Component} from "react";
import {chickRecipientFetch, chickRecipientUnload} from "../../redux/action/chickRecipient";
import {connect} from "react-redux";
import ChickRecipient from "../../components/chickRecipients/ChickRecipient";

const mapStateToProps = state => ({
    ...state.chickRecipient
})

const mapDispatchToProps = {
    chickRecipientFetch,
    chickRecipientUnload
}

class ChickRecipientContainer extends Component {
    componentDidMount() {
        this.props.chickRecipientFetch(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.chickRecipientUnload()
    }

    render() {
        const {chickRecipient, isFetching} = this.props;
        return (
            <>
                <ChickRecipient chickRecipient={chickRecipient} isFetching={isFetching} />
            </>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChickRecipientContainer)
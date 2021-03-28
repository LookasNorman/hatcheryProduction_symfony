import React, {Component} from "react";
import ChickRecipientsList from "../../components/chickRecipients/ChickRecipientsList";
import {chickRecipientsListFetch} from "../../redux/action/chickRecipient";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.chickRecipients
})

const mapDispatchToProps = {
    chickRecipientsListFetch
}

class ChickRecipientsListContainer extends Component {
    componentDidMount() {
        this.props.chickRecipientsListFetch()
    }

    render() {
        const {chickRecipients, isFetching} = this.props;
        return (
            <ChickRecipientsList chickRecipients={chickRecipients} isFetching={isFetching}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChickRecipientsListContainer);
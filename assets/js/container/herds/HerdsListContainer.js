import React, {Component} from "react";
import HerdsList from "../../components/herds/HerdsList";
import {herdsListFetch, herdsListUnload} from "../../redux/action/herds";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.herds
})

const mapDispatchToProps = {
    herdsListFetch,
    herdsListUnload
}

class HerdsListContainer extends Component {
    componentDidMount() {
        this.props.herdsListFetch(this.props.breederId)
    }

    componentWillUnmount() {
        this.props.herdsListUnload()
    }

    render() {
        const {herds, isFetching} = this.props;
        return (
            <HerdsList herds={herds} isFetching={isFetching}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HerdsListContainer);
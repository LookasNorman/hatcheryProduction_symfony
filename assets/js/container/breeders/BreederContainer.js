import React, {Component} from "react";
import {breederFetch, breederUnload} from "../../redux/action/breeders";
import {connect} from "react-redux";
import Breeder from "../../components/breeders/Breeder";
import HerdsListContainer from "../herds/HerdsListContainer";

const mapStateToProps = state => ({
    ...state.breeder
})

const mapDispatchToProps = {
    breederFetch,
    breederUnload
}

class BreederContainer extends Component {
    componentDidMount() {
        this.props.breederFetch(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.breederUnload()
    }

    render() {
        const {breeder, isFetching} = this.props;
        return (
            <>
                <Breeder breeder={breeder} isFetching={isFetching} />
                <HerdsListContainer breederId={this.props.match.params.id}/>
            </>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreederContainer)
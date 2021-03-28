import React, {Component} from "react";
import BreedersList from "../../components/breeders/BreedersList";
import {breedersListFetch} from "../../redux/action/breeders";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.breeders
})

const mapDispatchToProps = {
    breedersListFetch
}

class BreedersListContainer extends Component {
    componentDidMount() {
        this.props.breedersListFetch()
    }

    render() {
        const {breeders, isFetching} = this.props;
        return (
            <BreedersList breeders={breeders} isFetching={isFetching}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedersListContainer);
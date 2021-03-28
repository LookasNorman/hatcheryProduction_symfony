import React, {Component} from "react";
import {
    CircularProgress,
} from "@material-ui/core";

class Breeder extends Component {
    render() {
        const {breeder, isFetching} = this.props;
        return (
            <>
                {
                    isFetching ? <CircularProgress/> :
                        <>
                            <h1 className="title">
                                {breeder && breeder.name}
                            </h1>
                        </>
                }
            </>
        )
    }
}

export default Breeder;
import React, {Component} from "react";
import {
    CircularProgress,
} from "@material-ui/core";

class ChickRecipient extends Component {
    render() {
        const {chickRecipient, isFetching} = this.props;
        return (
            <>
                {
                    isFetching ? <CircularProgress/> :
                        <>
                            <h1 className="title">
                                {chickRecipient && chickRecipient.name}
                            </h1>
                        </>
                }
            </>
        )
    }
}

export default ChickRecipient;
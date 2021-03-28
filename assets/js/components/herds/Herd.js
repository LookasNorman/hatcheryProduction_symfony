import React, {Component} from "react";
import {
    CircularProgress,
} from "@material-ui/core";

class Herd extends Component {
    render() {
        const {herd, isFetching} = this.props;

        return (
            <>
                {
                    isFetching ? <CircularProgress/> :
                        <>
                            <h1 className="title">
                                {herd && herd.name}
                            </h1>
                        </>
                }
            </>
        )
    }
}

export default Herd;
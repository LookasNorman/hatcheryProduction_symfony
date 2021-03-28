import React, {Component} from "react";
import {
    CircularProgress
} from "@material-ui/core";
import Moment from "react-moment";
import {EggsInputDetailsList} from "../eggsInputDetails/EggsInputDetailsList";

class EggsInputsList extends Component {

    render() {
        const {eggInput, isFetching} = this.props;

        return (
            <>
                {
                    isFetching ? <CircularProgress/> :
                        <>
                            {eggInput &&
                            <>
                                <h1 className="title">Nakład {eggInput.name} - <Moment
                                    format="YYYY-MM-DD">{eggInput.inputDate}</Moment></h1>
                                <h3>Ilość
                                    jaj: {eggInput.eggsInputDetails && eggInput.eggsInputDetails.reduce(function (prev, cur) {
                                        return prev + cur.eggsNumber;
                                    }, 0)} </h3>
                                <EggsInputDetailsList eggsInputDetails={eggInput}/>
                            </>}
                        </>
                }
            </>
        )
    }

}

export default EggsInputsList;
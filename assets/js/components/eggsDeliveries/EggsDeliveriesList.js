import React, {Component} from "react";
import {
    CircularProgress, IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {KeyboardArrowDown, KeyboardArrowUp} from "@material-ui/icons";
import {Row} from "./EggsDeliveryRow";

class EggsDeliveriesList extends Component {

    state = {
        open: false
    }

    setOpen = (open) => {
        this.setState({
            open: open
        })
    }

    render() {
        const {deliveries, isFetching} = this.props;

        return (
            <>
                <h1 className="title">Dostawy stada</h1>
                {
                    isFetching ? <CircularProgress/> :
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Stada dostawcy">
                                <TableHead>
                                    <TableRow>
                                        <TableCell rowSpan={2} />
                                        <TableCell rowSpan={2}>ID</TableCell>
                                        <TableCell align="right" rowSpan={2}>Data dostawy</TableCell>
                                        <TableCell align="right" colSpan={2}>Ilość jaj</TableCell>
                                        <TableCell align="right" rowSpan={2}>Data zniesienia od</TableCell>
                                        <TableCell align="right" rowSpan={2}>Data zniesienia do</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Dostarczonych</TableCell>
                                        <TableCell>Magazyn</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {deliveries ? deliveries.map((delivery) => (
                                            <Row row={delivery} key={delivery.id}/>
                                        )) :
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Brak dostaw
                                            </TableCell>
                                        </TableRow>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                }
            </>
        )
    }

}

export default EggsDeliveriesList;
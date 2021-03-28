import React, {Component} from "react";
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {Row} from "./EggsInputsRow";

class EggsInputsList extends Component {

    state = {
        open: false
    }

    setOpen = (open) => {
        this.setState({
            open: open
        })
    }

    render() {
        const {eggsInputs, isFetching} = this.props;

        return (
            <>
                <h1 className="title">Nakłady</h1>
                {
                    isFetching ? <CircularProgress/> :
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Stada dostawcy">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Nazwa nakładu</TableCell>
                                        <TableCell align="right">Data nakładu</TableCell>
                                        <TableCell align="right">Ilość jaj</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {eggsInputs ? eggsInputs.map((eggInput) => (
                                            <Row row={eggInput} key={eggInput.id}/>
                                        )) :
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Brak nakładów
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

export default EggsInputsList;
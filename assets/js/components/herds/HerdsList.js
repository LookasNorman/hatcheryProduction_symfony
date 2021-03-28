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
import {Link} from "react-router-dom";

class HerdsList extends Component {

    render() {
        const {herds, isFetching} = this.props;
        return (
            <>
                <h1 className="title">Wszystkie stada</h1>
                {
                    isFetching ? <CircularProgress/> :
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Stada dostawcy">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Nazwa stada</TableCell>
                                        <TableCell align="right">Data wylęgu</TableCell>
                                        <TableCell align="right">Rasa</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {herds ? herds.map((herd) => (
                                            <TableRow key={herd.id}>
                                                <TableCell component="th" scope="row">
                                                    <Link to={`/herd/${herd.id}`}>{herd.id}</Link>
                                                </TableCell>
                                                <TableCell align="right">{herd.name}</TableCell>
                                                <TableCell align="right">{herd.hatchingDate}</TableCell>
                                                <TableCell align="right">{herd.breed.name} {herd.breed.type}</TableCell>
                                            </TableRow>
                                        )) :
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Brak stad
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

export default HerdsList;
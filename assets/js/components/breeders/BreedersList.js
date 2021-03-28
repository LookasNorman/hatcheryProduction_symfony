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
import {Add} from "@material-ui/icons";
import NewBreeder from "./NewBreeder";

class BreedersList extends Component {

    render() {
        const {breeders, isFetching} = this.props;
        return (
            <>
                <NewBreeder/>
                <h1 className="title">Wszyscy hodowcy <Add /></h1>
                {
                    isFetching ? <CircularProgress/> :
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Dostawcy jaj">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Nazwa</TableCell>
                                        <TableCell align="right">E-mail</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {breeders ? breeders.map((breeder) => (
                                            <TableRow key={breeder.id}>
                                                <TableCell component="th" scope="row">
                                                    <Link to={`/supplier/${breeder.id}`}>{breeder.id}</Link>
                                                </TableCell>
                                                <TableCell align="right">{breeder.name}</TableCell>
                                                <TableCell align="right">{breeder.email}</TableCell>
                                            </TableRow>
                                        )) :
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Brak dostawców
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

export default BreedersList;
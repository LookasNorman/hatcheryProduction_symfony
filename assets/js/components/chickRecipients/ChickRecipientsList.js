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

class ChickRecipientsList extends Component {

    render() {
        const {chickRecipients, isFetching} = this.props;
        return (
            <>
                <h1 className="title">Wszyscy brojlerzyści <Add /></h1>
                {
                    isFetching ? <CircularProgress/> :
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="Odbiorcy piskląt">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Nazwa</TableCell>
                                        <TableCell align="right">E-mail</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {chickRecipients ? chickRecipients.map((chickRecipient) => (
                                            <TableRow key={chickRecipient.id}>
                                                <TableCell component="th" scope="row">
                                                    <Link to={`/recipient/${chickRecipient.id}`}>{chickRecipient.id}</Link>
                                                </TableCell>
                                                <TableCell align="right">{chickRecipient.name}</TableCell>
                                                <TableCell align="right">{chickRecipient.email}</TableCell>
                                            </TableRow>
                                        )) :
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Brak odbiorców
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

export default ChickRecipientsList;
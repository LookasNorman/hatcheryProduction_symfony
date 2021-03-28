import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import {KeyboardArrowDown, KeyboardArrowUp} from "@material-ui/icons";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import {PercentFormat} from "../basic/PercentFormat";
import {Link} from "react-router-dom";
import {EggsInputDetailsList} from "../eggsInputDetails/EggsInputDetailsList";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

export function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"><Link to={`/outlay/${row.id}`}>{row.id}</Link></TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right"><Moment format="YYYY-MM-DD">{row.inputDate}</Moment></TableCell>
                <TableCell align="right">
                    {row.eggsInputDetails && row.eggsInputDetails.reduce(function (prev, cur) {
                        return prev + cur.eggsNumber;
                    }, 0)}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Szczegóły nakładu
                            </Typography>
                            <EggsInputDetailsList eggsInputDetails={row} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
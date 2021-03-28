import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Moment from "react-moment";
import {PercentFormat} from "../basic/PercentFormat";

export function EggsInputDetailsList(props) {
    const {eggsInputDetails} = props;

    return (
        <React.Fragment>
            <Table size="small" aria-label="purchases">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Hodowca</TableCell>
                        <TableCell align="right">Aparaty lęgowe</TableCell>
                        <TableCell align="right">Data dostawy</TableCell>
                        <TableCell align="right">Odpad z dostawy</TableCell>
                        <TableCell align="right">Wiek stada</TableCell>
                        <TableCell align="right">Liczba nałożonych jaj</TableCell>
                        <TableCell align="right">Odpad po świetleniu</TableCell>
                        <TableCell align="right">% zapłodnienia</TableCell>
                        <TableCell align="right">Wylęg</TableCell>
                        <TableCell align="right">Brakowanie</TableCell>
                        <TableCell align="right">Liczba jaj niewyklutych</TableCell>
                        <TableCell align="right">% wylęgu</TableCell>
                        <TableCell align="right">% wylęgu z jaj zapłodnionych</TableCell>
                        <TableCell align="right">% brakowania</TableCell>
                        <TableCell align="right">różńica między zapłodnieniem i wylęgiem</TableCell>
                        <TableCell align="right">Aparaty klujnikowe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {eggsInputDetails.eggsInputDetails.map((inputDetail) => (
                        <TableRow key={inputDetail.id}>
                            <TableCell component="th" scope="row">
                                {inputDetail.id}
                            </TableCell>
                            <TableCell>{inputDetail.eggsDelivery.herd.breeder.name}</TableCell>
                            <TableCell
                                align="right">{inputDetail.setter ? inputDetail.setter.name : '---'}</TableCell>
                            <TableCell align="right"><Moment format="YYYY-MM-DD">
                                {inputDetail.eggsDelivery.deliveryDate}
                            </Moment></TableCell>
                            <TableCell align="right">
                                {inputDetail.deliveryWasteEggs && inputDetail.deliveryWasteEggs.reduce(function (prev, cur) {
                                    return prev + cur.eggsNumber;
                                }, 0)}
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">{inputDetail.eggsNumber}</TableCell>
                            <TableCell align="right">
                                {inputDetail.wasteEggsLighting && inputDetail.wasteEggsLighting.reduce(function (prev, cur) {
                                    return prev + cur.eggsNumber;
                                }, 0)}
                            </TableCell>
                            <TableCell align="right">
                                <PercentFormat
                                    value={(inputDetail.eggsNumber - (inputDetail.wasteEggsLighting.reduce(function (prev, cur) {
                                        return prev + cur.eggsNumber;
                                    }, 0))) / inputDetail.eggsNumber * 100}
                                />
                            </TableCell>
                            <TableCell align="right">
                                {inputDetail.chickOutputs && inputDetail.chickOutputs.reduce(function (prev, cur) {
                                    return prev + cur.hatching;
                                }, 0)}
                            </TableCell>
                            <TableCell align="right">
                                {inputDetail.chickOutputs && inputDetail.chickOutputs.reduce(function (prev, cur) {
                                    return prev + cur.missing;
                                }, 0)}
                            </TableCell>
                            <TableCell align="right">
                                {inputDetail.eggsNumber - inputDetail.wasteEggsLighting.reduce(function (prev, cur) {
                                    return prev + cur.eggsNumber;
                                }, 0) - inputDetail.chickOutputs.reduce(function (prev, cur) {
                                    return prev + cur.hatching;
                                }, 0) - inputDetail.chickOutputs.reduce(function (prev, cur) {
                                    return prev + cur.missing;
                                }, 0)}
                            </TableCell>
                            <TableCell align="right">
                                <PercentFormat
                                    value={(inputDetail.chickOutputs.reduce(function (prev, cur) {
                                        return prev + cur.hatching;
                                    }, 0)) / inputDetail.eggsNumber * 100}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <PercentFormat
                                    value={(inputDetail.chickOutputs.reduce(function (prev, cur) {
                                        return prev + cur.hatching;
                                    }, 0)) / (inputDetail.eggsNumber - inputDetail.wasteEggsLighting.reduce(function (prev, cur) {
                                        return prev + cur.eggsNumber;
                                    }, 0)) * 100}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <PercentFormat
                                    value={(inputDetail.chickOutputs.reduce(function (prev, cur) {
                                        return prev + cur.missing;
                                    }, 0)) / inputDetail.eggsNumber * 100}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <PercentFormat
                                    value={(inputDetail.wasteEggsLighting && (inputDetail.eggsNumber - (inputDetail.wasteEggsLighting.reduce(function (prev, cur) {
                                        return prev + cur.eggsNumber;
                                    }, 0))) / inputDetail.eggsNumber * 100) - ((inputDetail.chickOutputs.reduce(function (prev, cur) {
                                        return prev + cur.hatching;
                                    }, 0)) / inputDetail.eggsNumber * 100)}
                                />
                            </TableCell>
                            <TableCell
                                align="right">{inputDetail.hatcher ? inputDetail.hatcher.name : '---'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
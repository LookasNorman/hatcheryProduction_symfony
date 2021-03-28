import React, {Component} from "react";
import NumberFormat from "react-number-format";

export function PercentFormat(props) {
    const {value} = props;
    return (
        <NumberFormat
            value={value}
            displayType={'text'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}
        />
    )
}

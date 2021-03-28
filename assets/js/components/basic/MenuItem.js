import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import {Link} from "react-router-dom";

export default function MenuItem({item}) {
    return(
        <Link to={item.path}>
            <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title}/>
            </ListItem>
        </Link>
    )
}
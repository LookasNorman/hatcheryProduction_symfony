import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";
import MenuItem from "../components/basic/MenuItem";
import {
    AddShoppingCart,
    Home,
    ListAlt,
    LocationOn,
    ShoppingCart,
    Style, VerifiedUser,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {[
                    {title: 'Zaloguj', icon: <VerifiedUser/>, path: '/login'},
                    {title: 'Strona główna', icon: <Home/>, path: '/'},
                    {title: 'Dostawcy', icon: <ListAlt/>, path: '/suppliers'},
                    {title: 'Dodaj dostawę jaj', icon: <AddShoppingCart/>, path: '/deliveries/new'},
                    {title: 'Magazyn', icon: <ShoppingCart/>, path: '/warehouse'},
                    {title: 'Nakłady', icon: <Style/>, path: '/outlays'}
                ].map((item, index) => (
                    <MenuItem key={index} item={item}/>
                ))}
            </List>
            <Divider/>
            <List>
                {[
                    {title: 'Odbiorcy', icon: <LocationOn/>, path: '/recipients'},
                ].map((item, index) => (
                    <MenuItem key={index} item={item}/>
                ))}
            </List>
        </div>
    )
}
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import LoginForm from "../components/basic/LoginForm";
import BreedersListContainer from "../container/breeders/BreedersListContainer";
import BreederContainer from "../container/breeders/BreederContainer";
import HerdContainer from "../container/herds/HerdContainer";
import Dashboard from "./Dashboard";
import {request} from "../agent";
import UnderConstruction from "../components/basic/UnderConstruction";
import EggsInputsListContainer from "../container/eggsInputs/EggsInputsListContainer";
import NewDelivery from "../components/eggsDeliveries/NewDelivery";
import EggsInputContainer from "../container/eggsInputs/EggsInputContainer";
import ChickRecipientsListContainer from "../container/chickRecipients/ChickRecipientsListContainer";
import ChickRecipientContainer from "../container/chickRecipients/ChickRecipientContainer";

class MainPage extends Component {
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken')
        if (token){
            request.setToken(token)
        }
    }
    render() {
        return (
            <Switch>
                <Route path='/login' component={LoginForm} />
                <Route path='/suppliers' component={BreedersListContainer} />
                <Route path='/supplier/:id' component={BreederContainer} />
                <Route path='/recipients' component={ChickRecipientsListContainer} />
                <Route path='/recipient/:id' component={ChickRecipientContainer} />
                <Route path='/herd/:id' component={HerdContainer} />
                <Route path='/outlays' component={EggsInputsListContainer} />
                <Route path='/outlay/:id' component={EggsInputContainer} />
                <Route path='/deliveries/new' component={NewDelivery} />
                <Route exact path='/' component={Dashboard} />
                <Route component={UnderConstruction} />
            </Switch>
        )
    }
}

export default MainPage;
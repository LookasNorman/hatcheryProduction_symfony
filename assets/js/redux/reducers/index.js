import {combineReducers} from "redux";
import breedersList from "./breedersList";
import breeder from "./breeder";
import herdsList from "./herdsList";
import herd from "./herd";
import eggsDeliveriesList from "./eggsDeliveriesList";
import {reducer as formReducer} from "redux-form";
import auth from "./auth";
import eggsInputsList from "./eggsInputsList";
import eggsInput from "./eggsInput";
import chickRecipientList from "./chickRecipientsList";
import chickRecipient from "./chickRecipient";

export default combineReducers({
    breeders: breedersList,
    breeder: breeder,
    chickRecipients: chickRecipientList,
    chickRecipient: chickRecipient,
    herds: herdsList,
    herd: herd,
    deliveries: eggsDeliveriesList,
    eggsInputs: eggsInputsList,
    eggsInput: eggsInput,
    auth,
    form: formReducer
})
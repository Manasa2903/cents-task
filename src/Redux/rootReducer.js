import { combineReducers } from "redux";
import detailsReducer from "./details/detailsReducer";
import regionsReducer from "./regions/regionsReducer";
import taxesReducer from "./taxes/taxesReducer";

const rootReducer = combineReducers({
    details: detailsReducer,
    regions: regionsReducer,
    taxes: taxesReducer,
});

export default rootReducer;
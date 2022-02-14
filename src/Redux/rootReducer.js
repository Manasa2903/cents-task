import { combineReducers } from "redux";
import detailsReducer from "./details/detailsReducer";
import regionsReducer from "./regions/regionsReducer";

const rootReducer = combineReducers({
    details: detailsReducer,
    regions: regionsReducer,
});

export default rootReducer;
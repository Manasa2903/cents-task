import { combineReducers } from "redux";
import detailsReducer from "./details/detailsReducer";
import regionsReducer from "./regions/regionsReducer";
import taxesReducer from "./taxes/taxesReducer";
import settingsReducer from "./settings/settingsReducer";
import preferencesReducer from "./preferences/preferencesReducer";

const rootReducer = combineReducers({
    details: detailsReducer,
    regions: regionsReducer,
    taxes: taxesReducer,
    settings: settingsReducer,
    preferences: preferencesReducer,
});

export default rootReducer;
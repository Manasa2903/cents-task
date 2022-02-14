import { combineReducers } from "redux";
import detailsReducer from "./Details/DetailsReducer";
import regionsReducer from "./Regions/RegionsReducer";

const rootReducer = combineReducers({
    details: detailsReducer,
    regions: regionsReducer,
});

export default rootReducer;
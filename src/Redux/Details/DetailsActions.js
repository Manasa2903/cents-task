import { SET_NEW_VALUES } from "./detailsTypes";

export const changeUserDetails = (details) => ({
    type: SET_NEW_VALUES,
    payload: details,
});
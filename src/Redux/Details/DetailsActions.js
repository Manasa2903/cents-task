import { SET_NEW_VALUES } from "./DetailsTypes";

export const changeUserDetails = (details) => ({
    type: SET_NEW_VALUES,
    payload: details,
});
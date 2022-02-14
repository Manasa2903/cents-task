import { SET_NEW_VALUES } from "./detailsTypes";
const initialState = {
    name: "Manasa",
    companyName: "Westagile Labs Hyderabad",
    address: "Beside NRI School",
    city: "Tenali",
    state: "Andhra Pradesh",
    zipCode: 522201,
    phone: 1234567890,
    email: "manasa.b@westagilelabs.com",
};

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_VALUES:
            //console.log(action.payload);
            return {...state, ...action.payload };
        default:
            return state;
    }
};

export default detailsReducer;

import { UPDATE_IS_SHOW_TAXES } from "./taxesTypes";
const initialState = {
    taxesList: [{
            id: 1,
            taxName: "abb",
            taxRate: 2,
            taxAgency: "abb",
        },
        {
            id: 2,
            taxName: "Alaska",
            taxRate: 12.7,
            taxAgency: "Alaska",
        },
        {
            id: 3,
            taxName: "Arizona",
            taxRate: 2.45,
            taxAgency: "Arizona Tax Agency",
        },
    ],
    isShowTaxes: true,
};

const taxesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IS_SHOW_TAXES:
            return {...state, isShowTaxes: action.payload };
        default:
            return state;
    }
};

export default taxesReducer;
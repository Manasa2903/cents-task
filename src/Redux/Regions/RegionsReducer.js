import { UPDATE_IS_SHOW_REGIONS } from "./RegionsTypes.js";

const initialState = {
    regionsList: [
        { id: 1, regionName: "Berkely", districtName: "Hearst Avenue" },
        { id: 2, regionName: "New York", districtName: "New York" },
        { id: 3, regionName: "Test Region", districtName: "Test dist" },
        { id: 4, regionName: "Virginia", districtName: "Washington" },
    ],
    isShowRegions: true,
};

const regionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IS_SHOW_REGIONS:
            return {...state, isShowRegions: action.payload };
        default:
            return state;
    }
};

export default regionsReducer;
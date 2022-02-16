import { UPDATE_CUSTOMER_PREFERENCES_REQUIRED } from "./preferencesTypes";

const initialState = {
  isCustomerPreferencesRequired: false,
};

const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_PREFERENCES_REQUIRED:
      return { ...state, isCustomerPreferencesRequired: action?.payload };
    default:
      return state;
  }
};

export default preferencesReducer;

import { UPDATE_CUSTOMER_PREFERENCES_REQUIRED } from "./preferencesTypes";

export const updateCustomerPreferencesRequired = (value) => {
    return { type: UPDATE_CUSTOMER_PREFERENCES_REQUIRED, payload: value };
};
import { UPDATE_IS_SHOW_TAXES } from "./taxesTypes";

export const updateIsShowTaxes = (value) => {
    return { type: UPDATE_IS_SHOW_TAXES, payload: value };
};
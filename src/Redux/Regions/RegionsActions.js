import { UPDATE_IS_SHOW_REGIONS } from "./RegionsTypes";

export const updateIsShowRegions = (value) => {
    return { type: UPDATE_IS_SHOW_REGIONS, payload: value };
};
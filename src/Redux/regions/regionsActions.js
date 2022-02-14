import { UPDATE_IS_SHOW_REGIONS } from "./regionsTypes";

export const updateIsShowRegions = (value) => {
    return { type: UPDATE_IS_SHOW_REGIONS, payload: value };
};

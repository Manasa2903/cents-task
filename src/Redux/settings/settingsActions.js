import {
    UPDATE_NOTES_INPUT_VALUE,
    UPDATE_TOGGLE_VALUE,
    UPDATE_WEIGHING_INSTRUCTIONS_LIST,
} from "./settingsTypes";

export const updateToggleValue = (key, value) => {
    return {
        type: UPDATE_TOGGLE_VALUE,
        payload: {
            [key]: value,
        },
    };
};

export const updateWeighingInstructionsList = (id, value) => {
    return { type: UPDATE_WEIGHING_INSTRUCTIONS_LIST, payload: { id, value } };
};

export const updateNotesInputValue = (value) => {
    return { type: UPDATE_NOTES_INPUT_VALUE, payload: value };
};
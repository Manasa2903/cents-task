import {
  UPDATE_NOTES_INPUT_VALUE,
  UPDATE_TOGGLE_VALUE,
  UPDATE_WEIGHING_INSTRUCTIONS_LIST,
} from "./settingsTypes";
const initialState = {
  isEmployeeCodeRequired: false,
  weighingInstructionsList: [
    {
      id: 1,
      text: "Weigh 1: During intake (sales weight)",
      isChecked: true,
      isDisabled: true,
    },
    {
      id: 2,
      text: "Weigh 2: Before processing",
      isChecked: false,
      isDisabled: false,
    },
    {
      id: 3,
      text: "Weigh 3: After processing",
      isChecked: false,
      isDisabled: false,
    },
    {
      id: 4,
      text: "Weigh 4: Upon completion / at pickup",
      isChecked: false,
      isDisabled: false,
    },
  ],
  isStorageTracking: false,
  notesInputValue: "",
  isWeighBackAtStore: true,
  isBagTracking: false,
  isHangDry: true,
  isStoreTipping: false,
  isServiceFee: true,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOGGLE_VALUE:
      return { ...state, ...action?.payload };
    case UPDATE_WEIGHING_INSTRUCTIONS_LIST:
      return {
        ...state,
        weighingInstructionsList: state?.weighingInstructionsList?.map(
          (eachInstruction) => {
            if (eachInstruction.id === action?.payload?.id) {
              eachInstruction.isChecked = action?.payload?.value;
            } else {
              return eachInstruction;
            }
            return eachInstruction;
          }
        ),
      };
    case UPDATE_NOTES_INPUT_VALUE:
      return { ...state, notesInputValue: action?.payload };
    default:
      return state;
  }
};

export default settingsReducer;

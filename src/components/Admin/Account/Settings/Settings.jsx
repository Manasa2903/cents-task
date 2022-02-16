import { BsPerson, BsBasket } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Toggle from "react-toggle";
import {
  updateNotesInputValue,
  updateToggleValue,
  updateWeighingInstructionsList,
} from "./../../../../Redux/settings/settingsActions";
import { connect } from "react-redux";
import CheckBox from "../../../Commons/checkBox/CheckBox";
import InputField from "./../../../Commons/inputField/InputField";
import RadioButton from "../../../Commons/radioButton/RadioButton";

const Settings = ({
  isEmployeeCodeRequired,
  updateToggleValue,
  weighingInstructionsList,
  updateWeighingInstructionsList,
  isStorageTracking,
  updateNotesInputValue,
  notesInputValue,
  isWeighBackAtStore,
  isBagTracking,
  isHangDry,
  isStoreTipping,
  isServiceFee,
}) => {
  const changeToggleValue = (e, key) => {
    updateToggleValue([key], e.target.checked);
  };

  const changeWeighingInstructionsList = (e, id) => {
    updateWeighingInstructionsList(id, e.target.checked);
  };

  const changeNotesInputValue = (e) => {
    updateNotesInputValue(e.target.value);
  };

  return (
    <div className="settings-container">
      <div className="settings-info-container">
        <BsPerson className="settings-icon" />
        <div className="settings-info">
          <h4 className="settings-heading">In-Store Team Management</h4>
          <div className="settings-control-container">
            <p className="settings-para">Require employee code in actions</p>
            <Toggle
              checked={isEmployeeCodeRequired}
              icons={false}
              onChange={(e) => {
                changeToggleValue(e, "isEmployeeCodeRequired");
              }}
            />
          </div>
        </div>
      </div>
      <div className="settings-info-container">
        <BsBasket className="settings-icon" />
        <div className="settings-info">
          <h4 className="settings-heading">Full Service Order Settings</h4>
          <h4 className="settings-heading">Weight Tracking</h4>
          <p className="settings-para">
            When would you like the order to be weighed?
          </p>
          <div>
            {weighingInstructionsList.map((eachInstruction) => (
              <CheckBox
                key={eachInstruction?.id}
                label={eachInstruction?.text}
                checked={eachInstruction?.isChecked}
                disabled={eachInstruction?.isDisabled}
                onChange={(e) =>
                  changeWeighingInstructionsList(e, eachInstruction?.id)
                }
                id={`checkbox ${eachInstruction?.id}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="settings-info-2">
        <h4 className="settings-heading">Storage Tracking</h4>
        <div className="settings-control-container">
          <p className="settings-para">
            Record rack number after intake and after processing
          </p>
          <Toggle
            checked={isStorageTracking}
            icons={false}
            onChange={(e) => {
              changeToggleValue(e, "isStorageTracking");
            }}
          />
        </div>
      </div>
      <div className="settings-info-2">
        <h4 className="settings-heading">Notes per Bag </h4>

        <p className="settings-para">
          Save tags to use for quick notes per bag when you're intaking an order
          on the Tablet App
        </p>
        <div className="settings-control-container">
          <InputField
            value={notesInputValue}
            type="text"
            onChange={changeNotesInputValue}
            placeholder="Type a tag and click +"
          />
          <button type="button" className="notes-add-button">
            +
          </button>
        </div>
      </div>
      <div className="settings-info-2">
        <h4 className="settings-heading">Terms of Service</h4>
        <p className="settings-para">
          Your customer receives a text message when their order has been
          created, we will include a link to view your terms of service. Please
          set which <br />
          terms we should use.
        </p>

        <RadioButton
          label="Use the Cents Standard terms of service"
          name="terms-of-service"
          id="compamy-terms"
        />
        <RadioButton
          label="Link to my own terms of service"
          name="terms-of-service"
          id="my-terms"
        />
      </div>

      <div className="settings-info-2">
        <h4 className="settings-heading">Receipt Customization</h4>
        <p className="settings-para">
          Customize the memo that appears in the footer of the receipt that
          prints out when an order has been paid for.
        </p>
        <p className="settings-small-para">(300 character limit)</p>
        <InputField
          label="Receipt Message"
          type="text"
          defaultValue="Thank you for your order"
        />
      </div>

      <div className="settings-info-2">
        <h4 className="settings-heading">In Store Tipping</h4>
        <div className="settings-control-container">
          <p className="settings-para">
            Give your customers the opportunity to add a tip to their full
            service laundry order
          </p>
          <Toggle
            checked={isStoreTipping}
            icons={false}
            onChange={(e) => {
              changeToggleValue(e, "isStoreTipping");
            }}
          />
        </div>
      </div>

      <div className="settings-info-2">
        <h4 className="settings-heading">Service Fee</h4>
        <div className="settings-control-container">
          <p className="settings-para">
            Charge customers a service fee on every POS sale
          </p>
          <Toggle
            checked={isServiceFee}
            icons={false}
            onChange={(e) => {
              changeToggleValue(e, "isServiceFee");
            }}
          />
        </div>
      </div>

      <div className="settings-info-container">
        <FiKey className="settings-icon" />
        <div className="settings-info">
          <h4 className="settings-heading">Hub Settings</h4>
          <div className="settings-control-container">
            <p className="settings-para">Bag tracking</p>
            <Toggle
              checked={isBagTracking}
              icons={false}
              onChange={(e) => {
                changeToggleValue(e, "isBagTracking");
              }}
            />
          </div>
        </div>
      </div>

      <div className="settings-info-2">
        <p className="settings-para">
          When would you like the order to be weighed?
        </p>
        <CheckBox
          label={"Weigh upon receiving order back at store"}
          checked={isWeighBackAtStore}
          onChange={(e) => changeToggleValue(e, "isWeighBackAtStore")}
          id={`weighBackAtStore`}
        />
      </div>

      <div className="settings-info-2">
        <h4 className="settings-heading">Hang Dry Settings</h4>
        <div className="settings-control-container">
          <p className="settings-para">Offer hang dry service for garments</p>
          <Toggle
            checked={isHangDry}
            icons={false}
            onChange={(e) => {
              changeToggleValue(e, "isHangDry");
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isEmployeeCodeRequired: state?.settings?.isEmployeeCodeRequired,
    weighingInstructionsList: state?.settings?.weighingInstructionsList,
    isStorageTracking: state?.settings?.isStorageTracking,
    notesInputValue: state?.settings?.notesInputValue,
    isWeighBackAtStore: state?.settings?.isWeighBackAtStore,
    isBagTracking: state?.settings?.isBagTracking,
    isHangDry: state?.settings?.isHangDry,
    isStoreTipping: state?.settings?.isStoreTipping,
    isServiceFee: state?.settings?.isServiceFee,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateToggleValue: (key, value) => dispatch(updateToggleValue(key, value)),
    updateWeighingInstructionsList: (id, value) =>
      dispatch(updateWeighingInstructionsList(id, value)),
    updateNotesInputValue: (value) => dispatch(updateNotesInputValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

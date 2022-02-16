import { RiEqualizerLine } from "react-icons/ri";
import Toggle from "react-toggle";
import { updateCustomerPreferencesRequired } from "./../../../../Redux/preferences/preferencesActions";
import { connect } from "react-redux";
import InputField from "./../../../Commons/inputField/InputField";

const Preferences = ({
  isCustomerPreferencesRequired,
  updateCustomerPreferencesRequired,
}) => {
  const changeCustomerPreferencesRequired = (e) => {
    updateCustomerPreferencesRequired(e.target.checked);
  };

  return (
    <div className="preferences-container">
      <div className="settings-info-container">
        <RiEqualizerLine className="settings-icon" />
        <div className="settings-info">
          <h4 className="settings-heading">Customer Preferences</h4>
          <div className="settings-control-container">
            <p className="settings-para">
              Enable customers to set custom care preferences based on options
              you provide
            </p>
            <Toggle
              checked={isCustomerPreferencesRequired}
              icons={false}
              onChange={changeCustomerPreferencesRequired}
            />
          </div>
        </div>
      </div>
      {isCustomerPreferencesRequired && (
        <div className="settings-info-2">
          <p className="settings-para">
            Which options would you like to offer to your customers when setting
            their custom preferences?
          </p>
          <InputField
            label="Section 1"
            defaultValue="Wash Temperature"
            id="washTemperature"
          />
          <div className="preferences-details">
            <p className="settings-para">Cold </p>
            <p className="settings-para">Warm</p>
            <p className="settings-para">Hot</p>
          </div>

          <InputField
            label="Section 2"
            defaultValue="Bleach for Whites"
            id="bleachForWhites"
          />
          <div className="preferences-details">
            <p className="settings-para">Yes </p>
            <p className="settings-para">No</p>
          </div>

          <InputField
            label="Section 3"
            defaultValue="Extra Services"
            id="extraServices"
          />
          <div className="preferences-details">
            <p className="settings-para">Color Sorted </p>
            <p className="settings-para">Folded</p>
            <p className="settings-para">Ironed</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isCustomerPreferencesRequired:
      state?.preferences?.isCustomerPreferencesRequired,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCustomerPreferencesRequired: (value) =>
      dispatch(updateCustomerPreferencesRequired(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);

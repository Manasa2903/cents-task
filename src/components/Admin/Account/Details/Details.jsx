import Admin from "./../../Admin";
import InputField from "./../../../Commons/InputField/InputField";
import { BsPerson, BsBuilding, BsTelephone, BsEnvelope } from "react-icons/bs";

const Details = () => {
  return (
    <div className="account-details-container">
      <Admin />
      <div className="account-details-right-section">
        <div className="account-details">
          <BsPerson className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue="Manasa"
              type="text"
              label="Name"
              className="input-container"
            />
            <InputField
              defaultValue="WestAgile Labs"
              type="text"
              label="Company Name"
              className="input-container"
            />
          </div>
        </div>

        <div className="account-details">
          <BsBuilding className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue="Beside NRI School"
              type="text"
              label="Address"
              className="input-container"
            />
            <InputField
              defaultValue="Tenali"
              type="text"
              label="City"
              className="input-container"
            />
            <InputField
              defaultValue="Andhra Pradesh"
              type="text"
              label="State"
              className="input-container"
            />
            <InputField
              defaultValue="522201"
              type="text"
              label="Zip Code"
              className="input-container"
            />
          </div>
        </div>

        <div className="account-details">
          <BsTelephone className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue="1234567890"
              type="text"
              label="Phone"
              className="input-container"
            />
          </div>
        </div>

        <div className="account-details">
          <BsEnvelope className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue="manasa.b@westagilelabs.com"
              type="text"
              label="Email"
              className="input-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

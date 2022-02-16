import InputField from "../../../Commons/inputField/InputField";
import { BsPerson, BsBuilding, BsTelephone, BsEnvelope } from "react-icons/bs";
import { connect } from "react-redux";
import { changeUserDetails } from "../../../../Redux/details/detailsActions";

const Details = ({ userDetails, changeUserDetails }) => {
  const changeValues = (e) => {
    const { name, value } = e.target;
    changeUserDetails({ [name]: value });
  };
  //console.log(userDetails);

  return (
    <div className="account-details-container">
      <div className="account-details-right-section">
        <div className="account-details">
          <BsPerson className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue={userDetails?.name}
              type="text"
              name="name"
              label="Name"
              className="input-container"
              onChange={changeValues}
              inputClassName="input-field"
              id="name"
            />
            <InputField
              defaultValue={userDetails?.companyName}
              type="text"
              label="Company Name"
              name="companyName"
              id="companyName"
              className="input-container"
              onChange={changeValues}
              inputClassName="input-field"
            />
          </div>
        </div>

        <div className="account-details">
          <BsBuilding className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue={userDetails?.address}
              type="text"
              label="Address"
              className="input-container"
              name="address"
              id="address"
              onChange={changeValues}
              inputClassName="input-field"
            />
            <InputField
              defaultValue={userDetails?.city}
              type="text"
              label="City"
              className="input-container"
              name="city"
              id="city"
              onChange={changeValues}
              inputClassName="input-field"
            />
            <InputField
              defaultValue={userDetails?.state}
              onChange={changeValues}
              inputClassName="input-field"
              type="text"
              label="State"
              className="input-container"
              name="state"
              id="state"
            />
            <InputField
              defaultValue={userDetails?.zipCode}
              type="text"
              label="Zip Code"
              className="input-container"
              name="zipCode"
              id="zipCode"
              onChange={changeValues}
              inputClassName="input-field"
            />
          </div>
        </div>

        <div className="account-details">
          <BsTelephone className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue={userDetails?.phone}
              type="text"
              label="Phone"
              className="input-container"
              id="phone"
              onChange={changeValues}
              inputClassName="input-field"
            />
          </div>
        </div>

        <div className="account-details">
          <BsEnvelope className="account-details-icon" />
          <div className="account-details-input-fields">
            <InputField
              defaultValue={userDetails?.email}
              type="text"
              label="Email"
              className="input-container"
              id="email"
              onChange={changeValues}
              inputClassName="input-field"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userDetails: state?.details };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserDetails: (values) => dispatch(changeUserDetails(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

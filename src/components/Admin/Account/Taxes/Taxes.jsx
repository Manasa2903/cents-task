import { MdOutlineLocationOn } from "react-icons/md";
import Toggle from "react-toggle";
import { connect } from "react-redux";
import { updateIsShowTaxes } from "./../../../../Redux/taxes/taxesActions";

const Taxes = ({ taxesList, isShowTaxes, updateIsShowTaxes }) => {
  const changeToggleValue = (e) => {
    updateIsShowTaxes(e.target.checked);
  };

  return (
    <div className="regions-container">
      <div className="regions-top-container">
        <MdOutlineLocationOn className="regions-icon" />
        <p className="regions-paragraph">Tax Rates</p>
        <Toggle
          defaultChecked={true}
          icons={false}
          onChange={changeToggleValue}
        />
      </div>
      <div className="regions-list">
        {isShowTaxes &&
          taxesList.map((eachRegion) => (
            <div key={eachRegion.id} className="regions-list-item">
              <p>{eachRegion.taxName}</p>
              <p>{eachRegion.taxRate}</p>
              <p>{eachRegion.taxAgency}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    taxesList: state.taxes.taxesList,
    isShowTaxes: state.taxes.isShowTaxes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIsShowTaxes: (value) => dispatch(updateIsShowTaxes(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Taxes);

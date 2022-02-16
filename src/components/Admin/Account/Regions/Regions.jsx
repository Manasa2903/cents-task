import { MdOutlineLocationOn } from "react-icons/md";
import Toggle from "react-toggle";
import { updateIsShowRegions } from "../../../../Redux/regions/regionsActions";
import { connect } from "react-redux";

const Regions = ({ regionsList, isShowRegions, updateIsShowRegions }) => {
  const changeToggleValue = (e) => {
    updateIsShowRegions(e.target.checked);
  };

  return (
    <div className="regions-container">
      <div className="regions-top-container">
        <MdOutlineLocationOn className="regions-icon" />
        <p className="regions-paragraph">Regions & Districts</p>
        <Toggle
          icons={false}
          checked={isShowRegions}
          onChange={changeToggleValue}
        />
      </div>
      <div className="regions-list">
        {isShowRegions &&
          regionsList?.map((eachRegion) => (
            <div key={eachRegion?.id} className="regions-list-item">
              <p>{eachRegion?.regionName}</p>
              <p className="regions-district-name">
                {eachRegion?.districtName}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    regionsList: state?.regions?.regionsList,
    isShowRegions: state?.regions?.isShowRegions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIsShowRegions: (value) => dispatch(updateIsShowRegions(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Regions);

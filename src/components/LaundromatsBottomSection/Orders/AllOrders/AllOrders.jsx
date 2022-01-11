import { BsDownload, BsSearch } from "react-icons/bs";
import "./AllOrders.css";

const AllOrders = () => {
  return (
    <div className="all-orders-container">
      <div className="all-orders-header">
        <h1 className="all-orders-heading">Showing Orders in all locations</h1>
        <BsDownload className="all-orders-download-icon" />
      </div>
      {/* <hr className="all-orders-line" /> */}
      <div className="all-orders-controls-container">
        <div className="all-orders-status-tabs">
          <p className="all-orders-tab-active">Active</p>
          <p className="all-orders-tab">Complete</p>
        </div>
        <BsSearch className="all-orders-search-icon" />
      </div>
      <ul className="all-orders-total-container">
        <li className="all-orders-item-container">
          {/* <div className="all-orders-item"> */}
          <div>
            <p className="all-orders-id">WF-1854</p>
            <p className="all-orders-amount-datetime">$17.33</p>
          </div>
          <p className="all-orders-customer-name">Apoorva Marathe</p>
          <div>
            <p className="all-orders-locations">EST Test (2241 Southern)</p>
            <p className="all-orders-amount-datetime">01/04/2022 02:14 pm</p>
          </div>
          {/* </div>
          <hr className="all-orders-item-divider" /> */}
        </li>
        <li className="all-orders-item-container">
          {/* <div className="all-orders-item"> */}
          <div>
            <p className="all-orders-id">WF-1854</p>
            <p className="all-orders-amount-datetime">$17.33</p>
          </div>
          <p className="all-orders-customer-name">Apoorva Marathe</p>
          <div>
            <p className="all-orders-locations">EST Test (2241 Southern)</p>
            <p className="all-orders-amount-datetime">01/04/2022 02:14 pm</p>
          </div>
          {/* </div>
          <hr className="all-orders-item-divider" /> */}
        </li>
        <li className="all-orders-item-container">
          {/* <div className="all-orders-item"> */}
          <div>
            <p className="all-orders-id">WF-1854</p>
            <p className="all-orders-amount-datetime">$17.33</p>
          </div>
          <p className="all-orders-customer-name">Apoorva Marathe</p>
          <div>
            <p className="all-orders-locations">EST Test (2241 Southern)</p>
            <p className="all-orders-amount-datetime">01/04/2022 02:14 pm</p>
          </div>
          {/* </div>
          <hr className="all-orders-item-divider" /> */}
        </li>
        <li className="all-orders-item-container">
          {/* <div className="all-orders-item"> */}
          <div>
            <p className="all-orders-id">WF-1854</p>
            <p className="all-orders-amount-datetime">$17.33</p>
          </div>
          <p className="all-orders-customer-name">Apoorva Marathe</p>
          <div>
            <p className="all-orders-locations">EST Test (2241 Southern)</p>
            <p className="all-orders-amount-datetime">01/04/2022 02:14 pm</p>
          </div>
          {/* </div>
          <hr className="all-orders-item-divider" /> */}
        </li>
        <li className="all-orders-item-container">
          {/* <div className="all-orders-item"> */}
          <div>
            <p className="all-orders-id">WF-1854</p>
            <p className="all-orders-amount-datetime">$17.33</p>
          </div>
          <p className="all-orders-customer-name">Apoorva Marathe</p>
          <div>
            <p className="all-orders-locations">EST Test (2241 Southern)</p>
            <p className="all-orders-amount-datetime">01/04/2022 02:14 pm</p>
          </div>
          {/* </div>
          <hr className="all-orders-item-divider" /> */}
        </li>
      </ul>
    </div>
  );
};

export default AllOrders;

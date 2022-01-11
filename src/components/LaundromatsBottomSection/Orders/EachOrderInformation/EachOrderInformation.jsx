import { BsThreeDots, BsCurrencyDollar } from "react-icons/bs";
import { RiScales2Line, RiKey2Line } from "react-icons/ri";
import { HiOutlineClock } from "react-icons/hi";
import "./EachOrderInformation.css";

const EachOrderInformation = () => {
  return (
    <div className="each-order-info-container">
      <div className="each-order-info-header">
        <h1 className="each-order-info-heading">WF-1854</h1>
        <BsThreeDots className="each-order-info-dots-icon" />
      </div>
      {/* <hr className="each-order-info-line" /> */}
      <div className="each-order-info-tabs">
        <p className="each-order-info-tab-active">Key Details</p>
        <p className="each-order-info-dot"></p>
        <p className="each-order-info-tab">Sales</p>
        <p className="each-order-info-dot"></p>
        <p className="each-order-info-tab">Processing</p>
        <p className="each-order-info-dot"></p>
        <p className="each-order-info-tab">Timeline</p>
      </div>

      <div className="each-order-info-details-container">
        <div className="each-order-info-details">
          <BsCurrencyDollar className="each-order-info-dollar-icon" />
          <div>
            <p className="each-order-info-value">$21.26</p>
            <p className="each-order-info-label">Total Order Value</p>
          </div>
        </div>
        <div className="each-order-info-details">
          <RiScales2Line className="each-order-info-dollar-icon" />
          <div>
            <p className="each-order-info-value">$21.26</p>
            <p className="each-order-info-label">Total Order Value</p>
          </div>
        </div>
        <div className="each-order-info-details">
          <HiOutlineClock className="each-order-info-dollar-icon" />
          <div>
            <p className="each-order-info-value">$21.26</p>
            <p className="each-order-info-label">Total Order Value</p>
          </div>
        </div>
      </div>

      <div className="each-order-info-summary">
        <div className="each-order-info-sub-heading-container">
          <RiKey2Line className="each-order-info-key-icon" />
          <p className="each-order-info-title">KEY DETAILS</p>
        </div>

        <div className="each-order-info-key-details-container">
          <div>
            <div>
              <h1 className="each-order-info-sub-heading">Customer</h1>
              <p className="each-order-info-sub-para">Manasa Bolisetti</p>
              <p className="each-order-info-sub-para">2345678909</p>
              <p className="each-order-info-sub-para">
                manasa.b@westagilelabs.com
              </p>
            </div>
            <div>
              <h1 className="each-order-info-sub-heading">
                Intake Date & Time
              </h1>
              <p className="each-order-info-sub-para">01/04/2022 02:14pm IST</p>
            </div>

            <div>
              <h1 className="each-order-info-sub-heading">Sales Weight</h1>
              <p className="each-order-info-sub-para">
                1.00 lbs (1.00 lbs chargeable)
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="each-order-info-sub-heading">Location</h1>
              <p className="each-order-info-sub-para">
                Origin: EST Test (2241 Southern)
              </p>
              <p className="each-order-info-sub-para">Processed: CA-85 (Hub)</p>
            </div>
            <h1 className="each-order-info-sub-heading">Intake Team Member</h1>
          </div>
        </div>
      </div>

      <div className="each-order-info-summary">
        <div className="each-order-info-sub-heading-container">
          <RiKey2Line className="each-order-info-key-icon" />
          <p className="each-order-info-title">SALES</p>
        </div>

        <div className="each-order-info-sales-container">
          <div>
            <h1 className="each-order-info-sub-heading">Customer</h1>
            <p className="each-order-info-sub-para">Manasa Bolisetti</p>
            <p className="each-order-info-sub-para">2345678909</p>
            <p className="each-order-info-sub-para">
              manasa.b@westagilelabs.com
            </p>
          </div>
          <div>
            <h1 className="each-order-info-sub-heading">Services</h1>
            <p className="each-order-info-sub-para">
              Queen Bedsheet ($14.99 / unit) x 1
            </p>
            <p className="each-order-info-sub-para">
              Lit🚀 (0.99 lb @ $2.33 + 0.01 lb @ $1.00 / lb)
            </p>
            <p className="each-order-info-sub-para">Total: $17.33</p>
          </div>

          <div>
            <h1 className="each-order-info-sub-heading">Tax</h1>
            <p className="each-order-info-sub-para">$3.24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachOrderInformation;

import { BsBank } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

const Payments = () => {
  return (
    <div>
      <div className="payments-container">
        <BsBank className="payments-icon" />
        <p className="payments-paragraph">Connected Account</p>
      </div>
      <div className="payments-bank-details-container">
        <MdOutlineDone className="payments-status-icon" />
        <p className="payments-bank-name">STRIPE TEST BANK **** 1116</p>
      </div>
    </div>
  );
};

export default Payments;

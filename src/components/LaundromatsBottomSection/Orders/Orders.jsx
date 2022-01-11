import OrderSummary from "../Orders/OrderSummary/OrderSummary";
import "./Orders.css";
import AllOrders from "./AllOrders/AllOrders";
import EachOrderInformation from "./EachOrderInformation/EachOrderInformation";

const Orders = () => {
  return (
    <div className="order-top-container">
      <OrderSummary />
      <div className="order-bottom-container">
        <AllOrders />
        <EachOrderInformation />
      </div>
    </div>
  );
};

export default Orders;

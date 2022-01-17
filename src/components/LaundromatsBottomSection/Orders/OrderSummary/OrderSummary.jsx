const OrderSummary = () => {
  return (
    <div className="order-summary-container">
      <h1 className="order-summary-heading">Orders</h1>
      <div className="order-values">
        <h1 className="total-order-value">5</h1>
        <p className="total-orders-label">Total orders this month</p>
      </div>
      <div className="order-values">
        <h1 className="total-order-value">$51</h1>
        <p className="total-orders-label">Total order value this month</p>
      </div>
      <div className="order-values">
        <h1 className="total-order-value">$10</h1>
        <p className="total-orders-label">Average order value this month</p>
      </div>
    </div>
  );
};

export default OrderSummary;

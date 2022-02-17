import { NavLink as Link } from "react-router-dom";
export const Orders = () => {
  const orderIds = ["10001", "10002", "10003",
                    "10004", "10005", "10006",
                    "10007", "10008", "10010"]
  return (
    <>
      <h2>Orders</h2>
      <ul className="orders">
        {/* Loop through the orders array and display link to order details */}
        {orderIds.map(orderId => {
          return (
            <li key={orderId}>
              <Link to={`/dashboard/order_details/${orderId}`}>
                View Order {orderId}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
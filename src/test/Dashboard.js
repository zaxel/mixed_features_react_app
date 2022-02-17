import { Routes, Route, NavLink as Link} from "react-router-dom";
import { Profile } from "./Profile";
import { Orders } from "./Orders";
import { Quotes } from "./Quotes";
import { NotFound } from "./NotFound";
import { OrderDetails } from "./OrderDetails";

const Dashboard = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
          <li>
            <Link to="quotes">Quotes</Link>
          </li>
        </ul>
        <div className="dashboard">
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="quotes" end element={<Quotes />}></Route>
            <Route path="order_details/:orderId" element={<OrderDetails />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    )
  }

export default Dashboard;
import React from "react";
import './App.css';
import { Routes, Route, NavLink as Link} from "react-router-dom";
import loadable from "@loadable/component";
import { Home } from "./test/Home";
// import Dashboard from "./test/Dashboard";
import { About } from "./test/About";
import { NotFound } from "./test/NotFound";
import RouteAsObj from "./test/RouteAsObj";
import Search  from "./test/Search";
import LoginPage from "./test/LoginPage";
import PrivateRoute from "./test/PrivateRoute";
import ProtectedPage from "./test/ProtectedPage";
import { PublicPage } from "./test/PublicPage";
import Invoices, { Invoice } from "./test/Invoices"

const Loading = () => {
  return <div>Loading...</div>
}

const Dashboard = loadable(() => import("./test/Dashboard.js"), {
  fallback: <Loading />,
})

function App() {
  return (
    <div className="App">
      <nav>
        <ul style={{display: 'flex', padding: '20px', listStyle: 'none', backgroundColor: 'gray'}}>
          <li>
            <Link activeclassname="active" to="/">Home</Link>
          </li>
          <li>
            <Link activeclassname="active" to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link activeclassname="active" to="/about">About</Link>
          </li>
          <li>
            <Link activeclassname="active" to="/object_route"> Route as Object </Link>
          </li>
          <li>
            <Link activeclassname="active" to="/search"> Search </Link>
          </li>
          <li>
            <Link activeclassname="active" to="/public"> Public Page </Link>
          </li>
          <li>
            <Link activeclassname="active" to="/protected"> Protected Page </Link>
          </li>
          <li>
            <Link activeclassname="active" to="/invoices"> Invoices </Link>
          </li>
        </ul>
      </nav>
      <div className="main" style={{fontSize: '22px', padding: '20px'}}>
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="object_route/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
          <Route path="protected" element={ <PrivateRoute>
                                              <ProtectedPage x={101} />
                                            </PrivateRoute> } >
          </Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<p>Please select an invoice above</p>}></Route>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;









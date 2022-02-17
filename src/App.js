import React from "react";
import { NavLink as Link, Route, Routes} from 'react-router-dom';
import './App.css';
import MainTable from './searchBoard/MainTable';
import MainTodo from './todo/MainTodo';
import Home from './Home';
import ErrorPage from './ErrorPage';
import LoginPage from "./auth/LoginPage";
import ProvideAuth from "./auth/ProvideAuth";
import AuthButton from "./auth/AuthButton";
import PrivateRoute from "./auth/PrivateRoute";
import Hooks from "./hooks/UseHooks"
import UseStatePage from "./hooks/UseStatePage";
import UseEffectPage from "./hooks/UseEffectPage";
import UseRefPage from "./hooks/UseRefPage";
import UseMemoPage from "./hooks/UseMemoPage";
import UseCallbackPage from "./hooks/UseCallbackPage";
import UseContextPage from "./hooks/UseContextPage";
import CustomHooks from "./hooks/CustomHooks";

function App() {
  
  return (
    <ProvideAuth>
        <header>
          <div className="header__container">
            <nav>
              <ul>
                <li><Link activeclassname="active" to="/">Home</Link></li>
                <li><Link activeclassname="active" to="/products">Products</Link></li>
                <li><Link activeclassname="active" to="/todo">ToDo</Link></li>
                <li><Link activeclassname="active" to="/hooks">Hooks</Link></li>
              </ul>
            </nav>
            <AuthButton />
            {/* <button>Login</button> */}
          </div>
        </header>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/products" element={ <MainTable />}/>
          <Route path='/todo' element={
              <PrivateRoute>
                <MainTodo/>
              </PrivateRoute>
            } ></Route>
          <Route path="/hooks" element={<Hooks />}>
                <Route index element={<p>Please choose a hook abow</p>}></Route>
                <Route path="/hooks/usestate" element={<UseStatePage />}/>
                <Route path="/hooks/useeffect" element={<UseEffectPage />}/>
                <Route path="/hooks/useref" element={<UseRefPage />}/>
                <Route path="/hooks/usememo" element={<UseMemoPage />}/>
                <Route path="/hooks/usecallback" element={<UseCallbackPage />}/>
                <Route path="/hooks/usecontext" element={<UseContextPage />}/>
                <Route path="/hooks/customhooks" element={<CustomHooks />}/>
          </Route>
          <Route path="/login" element={<LoginPage />}/>
          <Route exact path="*" element={ <ErrorPage/>}/>
        </Routes>
    </ProvideAuth>
    
  );
}

export default App;

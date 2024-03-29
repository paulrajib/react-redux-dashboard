// var $ = window.$;
//import $ from 'jquery';
//import Popper from 'popper.js';
//import $ from 'jquery/dist/jquery.js';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/scss/bootstrap.scss";

import "./scss/app.scss";
// import "./app.scss";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/custom.js";

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Form from "./pages/form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <BrowserRouter>
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />

                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} title="Add New User" />}
                  />
                </Route>

                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productID" element={<Single />} />

                  <Route
                    path="new"
                    element={<Form title="Add New Product" />}
                  />
                </Route>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

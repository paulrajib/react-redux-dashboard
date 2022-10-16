// import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';

import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-side-menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="brand">Brand Logo</div>
        </Link>

        <button
          className="toggle-btn navbar-toggler sm-toggle-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu-content"
          aria-controls="menu-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="animated-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/*<i className="fa fa-bars fa-2x toggle-btn" data-bs-toggle="collapse" data-bs-target="#menu-content"></i>*/}

        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              {/* // eslint-disable-next-line */}
              <a href="#">
                <i className="fas fa-tachometer-alt fa-lg"></i> Dashboard
              </a>
            </li>

            <li
              data-bs-toggle="collapse"
              data-bs-target="#elements"
              className="collapsed active"
            >
              {/* // eslint-disable-next-line */}
              <a href="#">
                <i className="fab fa-studiovinari fa-lg"></i> UI Elements{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="elements">
              <li className="active">
                <a href="/test">CSS3 Animation</a>
              </li>
              <li>
                <a href="/test">General</a>
              </li>
              <li>
                <a href="/test">Buttons</a>
              </li>
              <li>
                <a href="/test">Tabs & Accordions</a>
              </li>
              <li>
                <a href="/test">Typography</a>
              </li>
              <li>
                <a href="/test">FontAwesome</a>
              </li>
              <li>
                <a href="/test">Slider</a>
              </li>
              <li>
                <a href="/test">Panels</a>
              </li>
              <li>
                <a href="/test">Widgets</a>
              </li>
              <li>
                <a href="/test">Bootstrap Model</a>
              </li>
            </ul>

            <li
              data-bs-toggle="collapse"
              data-bs-target="#service"
              className="collapsed"
            >
              {/* // eslint-disable-next-line */}
              <a href="#">
                <i className="fab fa-fort-awesome-alt fa-lg"></i> Services{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="service">
              <li>New Service 1</li>
              <li>New Service 2</li>
              <li>New Service 3</li>
            </ul>

            <li
              data-bs-toggle="collapse"
              data-bs-target="#users"
              className="collapsed"
            >
              {/* // eslint-disable-next-line */}
              <a href="#">
                <i className="fa fa-users fa-lg"></i> Users{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="users">
              <Link to="/users" style={{ textDecoration: "none" }}>
                <li>Users</li>
              </Link>
              <Link to="/users/new" style={{ textDecoration: "none" }}>
                <li>Add new</li>
              </Link>
              <li>user</li>
              <li>New New 3</li>
            </ul>

            <li
              data-bs-toggle="collapse"
              data-bs-target="#products"
              className="collapsed"
            >
              {/* // eslint-disable-next-line */}
              <a href="#">
                <i className="fab fa-pagelines fa-lg"></i> Products{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="products">
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>Products</li>
              </Link>
              <Link to="/products/new" style={{ textDecoration: "none" }}>
                <li>New</li>
              </Link>
              <li>New New 2</li>
              <li>New New 3</li>
            </ul>

            <li>
              <a href="/test">
                <i className="fas fa-user-tie fa-lg"></i> Profile
              </a>
            </li>

            <li>
              <a href="/test">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import "./home.scss";


const Home = () => {
  return (<div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="container">
        <div className="row widgets">
          <Widget type="user" className="col-3"/>
          <Widget type="order" className="col-3"/>
          <Widget type="earnings" className="col-3"/>
          <Widget type="balance" className="col-3"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>

    </div>
  </div>);
}

export default Home;

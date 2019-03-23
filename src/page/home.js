import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import HomeUp from './../component/homeUp'
import HomeTrending from './../component/homeTrending'
import HomePublisher from './../component/homePublisher'
import HomeCategory from './../component/homeCategory'
import HomeAdmin from "./../component/homeAdmin"
import HomeSeller from "./../component/homeSeller"

class Home extends Component {
  render() {
    return (
      <div>
        {(localStorage.getItem('status') != 'admin') && <HomeUp />}
        {(localStorage.getItem('status') == 'penjual') && <HomeSeller />}
        {(localStorage.getItem('status') != 'admin') && <HomeTrending />}
        {(localStorage.getItem('status') != 'admin') && <HomePublisher />}
        {(localStorage.getItem('status') != 'admin') && <HomeCategory />}
        {(localStorage.getItem('status') == 'admin') && <HomeAdmin />}
      </div>
    );
  }
}

export default Home;

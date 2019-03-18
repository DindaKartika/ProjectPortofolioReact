import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import HomeUp from './../component/homeUp'
import HomeTrending from './../component/homeTrending'
import HomePublisher from './../component/homePublisher'
import HomeCategory from './../component/homeCategory'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeUp />
        <HomeTrending />
        <HomePublisher />
        <HomeCategory />
      </div>
    );
  }
}

export default Home;

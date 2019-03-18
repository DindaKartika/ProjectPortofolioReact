import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Arrow from './../image/icon/arrow-blue.png';
import Arkais from './../image/Book/novel/arkais.jpg';
import DearNathan from './../image/Book/novel/Dear-Nathan.jpg';
import Mozachiko from './../image/Book/novel/mozachiko.jpg';
import Shea from './../image/Book/novel/shea.jpg';

class HomeTrending extends Component{
    render(){
        return(
            <div className="container-fluid trending">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <h2 className="main-index-styling">Trending</h2>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                        <div className="garis"></div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="telusuri">
                            <a className="baca-selengkapnya" href="trending.html">
                                <span>Telusuri lebih banyak</span>
                                <img className="arrow" src={Arrow}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="book-big">
                    <div className="row">
                    <div className="col-md-3">
                        <Link to="/search"><img src={Arkais}/></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/search"><img src={DearNathan}/></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/search"><img src={Mozachiko}/></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/search"><img src={Shea}/></Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomeTrending))

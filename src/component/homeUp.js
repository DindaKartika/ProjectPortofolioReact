import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

import Resign from './../image/Book/novel/resign.jpg'
import AddieMs from './../image/Book/biografi/addie-ms.jpg'
import TemanChatting from './../image/Book/KKPK/teman-chatting-misterius.jpg'

import CarouselHome from './carouselHome.js'

class HomeUp extends Component{
    render(){
        return(
            <div className="container-fluid index-up">
                <div className="row">
                    <div className="col-lg-6 d-lg-block d-none">
                        <CarouselHome/>
                        {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="5000">
                                    <img src={Resign} className="d-block" height="300"/>
                                </div>
                                <div className="carousel-item" data-interval="5000">
                                    <img src={AddieMs} className="d-block" height="300"/>
                                </div>
                                <div className="carousel-item" data-interval="5000">
                                    <img src={TemanChatting} className="d-block" height="300"/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="welcome-msg">
                            <span className="welcome">Welcome To <strong>BukuKu</strong></span>
                            <br/>
                            <span className="notes">Your Book-shopping Portal</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomeUp))

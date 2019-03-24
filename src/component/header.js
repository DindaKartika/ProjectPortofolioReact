import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Exit from './../image/icon/exit.png'
import User from './user.js'

import HeaderHidden from './HeaderHidden.js'


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          explores: false,
          name: "",
          status: "",
          username: "",
          password: "",
          is_login: true,
          token: ""
        }
    
        this.toggle = this.toggle.bind(this);
        this.openExplore = this.openExplore.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.afterLogin = this.afterLogin.bind(this);
        this.signUp = this.signUp.bind(this);
        this.forgetPass = this.forgetPass.bind(this);
      }

      state = {username:"", password:""};
      changeInput = e =>{
          this.setState({[e.target.name]: e.target.value});
      };

      afterLogin(){
        const self = this;
        const {username, password} = this.state;
          axios
              .get('http://0.0.0.0:5000/login', {
                params:{
                    'username': this.state.username,
                    'password': this.state.password
                }
              })
              .then(response => {
                  if (response.data.hasOwnProperty("token")){
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('is_login', true);
                    this.setState({is_login: true})
                    console.log(response.data)
                    this.setState({modal:false})
                    this.props.history.push("/");
                  }
              })
              .catch(error => {
                  console.log(error);
              });
      };
    
      componentDidMount = () =>{
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/member/me', {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            this.setState({name: response.data.username});
            localStorage.setItem('status', response.data.status);
            this.setState({status: response.data.status});
        })
        .catch(error => {
            console.log('error', error);
        })
    }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      forgetPass() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
        this.props.history.push("/lupa-password");
      }

      signUp() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
        this.props.history.push("/signup");
      }

      openExplore() {
        this.setState(prevState => ({
            explores: !prevState.explores
          }));
        // console.log("clicked")
        }

    render(){
        const {name, status} = this.state;
        const is_login = JSON.parse(localStorage.getItem('is_login'))
        if(is_login === null){
            return(
                    <div className="container-fluid">
                        <div className="header-atas d-md-block d-none">
                            <div className="row">
                                <div className="col-lg-2 col-md-4"></div>
                                <div className="col-lg-4 d-lg-block d-none"></div>
                                <div className="col-lg-6 col-md-8">
                                    <ul className="nav">
                                        <li className="nav-item nav-atas"><Link to="/promosi" className="nav-link">Promo</Link></li>
                                        <li className="nav-item nav-atas"><Link to="/start-shop" className="nav-link">Mulai Berjualan</Link></li>
                                        <li className="nav-item nav-atas"><Link to="/help" className="nav-link">Pusat Bantuan</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-bawah">
                            <div className="row">
                                <div className="col-lg-2 col-md-6">
                                    <h1><Link to="/">BukuKu</Link></h1>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <form action="/search">
                                        <input type="text" name="search" placeholder="search"/>
                                    </form>
                                </div>
                                <div className="col-lg-3"></div>
                                <div className="col-lg-4">
                                    <ul className="nav">
                                        <li className="nav-item nav-bawah"><button onClick={this.openExplore} >Explore</button></li>
                                        <li className="nav-item nav-bawah"><Link to="/cart" className="nav-link">Cart</Link></li>
                                        <li className="nav-item nav-bawah"><button onClick={this.toggle}>Log In</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                        {this.state.explores && <HeaderHidden />}
                    </div>
                    <Modal isOpen={this.state.modal}>
                        <ModalHeader toggle={this.toggle}>
                            Log In
                        </ModalHeader>
                        <ModalBody>
                                <label for="username">Username</label>
                                <br/>
                                <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)} required/>
                                <br/>
                                <label for="password">Password</label>
                                <br/>
                                <input type="password" name="password" placeholder="Password" onChange={e => this.changeInput(e)} required/>
                                <br/>
                                <span onClick={() =>this.forgetPass()} className="forgetPass">Lupa Password?</span>
                                <br/>
                                <button onClick={this.afterLogin} className="buttonModal">Masuk</button>
                            <span>Belum Punya Akun?</span>
                            <button className="buttonModal signUp" onClick={this.signUp}>Daftar</button>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        }
        else{
            return(
                <div className="header">
                    <div className="container-fluid">
                        <div className="header-atas d-md-block d-none">
                            <div className="row">
                                <div className="col-lg-2 col-md-4"><User/></div>
                                <div className="col-lg-4 d-lg-block d-none"></div>
                                <div className="col-lg-6 col-md-8">
                                    <ul className="nav">
                                        <li className="nav-item nav-atas"><Link to="/promosi" className="nav-link">Promo</Link></li>
                                        <li className="nav-item nav-atas"><Link to="/start-shop" className="nav-link">Mulai Berjualan</Link></li>
                                        <li className="nav-item nav-atas"><Link to="/help" className="nav-link">Pusat Bantuan</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-bawah">
                            <div className="row">
                                <div className="col-lg-2 col-md-6">
                                    <h1><Link to="/">BukuKu</Link></h1>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <form action="/search">
                                        <input type="text" name="search" placeholder="search"/>
                                    </form>
                                </div>
                                <div className="col-lg-3"></div>
                                <div className="col-lg-4">
                                    <ul className="nav">
                                        <li className="nav-item nav-bawah"><button onClick={this.openExplore} style={{display: (localStorage.getItem('status') == 'admin') ? 'none' : 'block' }}>Explore</button></li>
                                        <li className="nav-item nav-bawah"><Link to="/cart" className="nav-link" style={{display: (localStorage.getItem('status') == 'admin') ? 'none' : 'block' }}>Cart</Link></li>
                                        <li className="nav-item nav-bawah"><Link to="/" className="nav-link" onClick={() =>this.props.postSignOut()} >Log Out</Link></li>
                                    </ul>
                                </div>
                                <div>
                                {this.state.explores && <HeaderHidden />}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            )
        }
    }
}

export default connect("token, is_login", actions)(withRouter(Header))

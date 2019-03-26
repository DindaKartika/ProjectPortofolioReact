import React, { Component } from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


class SignUp extends Component {
    state = {namadepan:"", namabelakang:"", username:"", email:"", password:""};
    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    postSignUp = () =>{
        const {namadepan, namabelakang, username, email, password} = this.state;
        const data={
            nama_depan: namadepan,
            nama_belakang: namabelakang,
            username: username,
            email: email,
            password: password
        };
        const self = this;
        axios
            .post('https://bukuku.site/member/register', data)
            .then(function(response){
                console.log(response.data);
                self.props.history.push('/');
            })
            .catch(function(error){
                console.log(error);
            });
    };
  render() {console.log('state', this.state);
    return (
      <section className="signup-box">
        <form onSubmit={e => e.preventDefault()}>
            <h1>Sign Up</h1>
            <hr/>
            <div className="row">
                <div className="col-md-3 col-4">
                    <label>Nama Depan</label>
                </div>
                <div className="col-md-9 col-8">
                    <input type="text" name="namadepan" placeholder="Nama Depan" onChange={e => this.changeInput(e)}/>
                </div>
                <div className="col-md-3 col-4">
                    <label>Nama Belakang</label>
                </div>
                <div className="col-md-9 col-8">
                    <input type="text" name="namabelakang" placeholder="Nama Belakang" onChange={e => this.changeInput(e)}/>
                </div>
                <div className="col-md-3 col-4">
                    <label>Username</label>
                </div>
                <div className="col-md-9 col-8">
                    <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)}/>
                </div>
                <div className="col-md-3 col-4">
                    <label>Email</label>
                </div>
                <div className="col-md-9 col-8">
                    <input type="email" name="email" placeholder="Email" onChange={e => this.changeInput(e)}/>
                </div>
                <div className="col-md-3 col-4">
                    <label>Password</label>
                </div>
                <div className="col-md-9 col-8">
                    <input type="password" name="password" placeholder="Password" onChange={e => this.changeInput(e)}/>
                </div>
            </div>
            <br/>
            <button onClick={() =>this.postSignUp()}>Sign Up</button>
            <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SignUp);
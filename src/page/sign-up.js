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
            namadepan: namadepan,
            namabelakang: namabelakang,
            username: username,
            email: email,
            password: password
        };
        const self = this;
        axios
            .post('http://0.0.0.0:5000/member/register', data)
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
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
            <h4>Sign In</h4>
            <div>
                <input type="text" name="namadepan" placeholder="Nama Depan" onChange={e => this.changeInput(e)}/>
            </div>
            <div>
                <input type="text" name="namabelakang" placeholder="Nama Belakang" onChange={e => this.changeInput(e)}/>
            </div>
            <div>
                <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)}/>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" onChange={e => this.changeInput(e)}/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" onChange={e => this.changeInput(e)}/>
            </div>
            <button onClick={() =>this.postSignUp()}>Sign Up</button>
            <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SignUp);
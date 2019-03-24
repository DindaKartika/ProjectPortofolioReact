import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"
import AddDetailMember from "./addMemberDetail";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
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

    render() {
        const {name} = this.state;
            return (
                <div>
                    <label>Halo, {name}</label>
                </div>
            );
    }
}

export default User;

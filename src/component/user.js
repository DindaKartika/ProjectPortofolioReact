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
            status: "",
            id:""
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const tokens = localStorage.getItem('token')
        axios
        .get('https://bukuku.site/member/me', {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            this.setState({name: response.data.username});
            this.setState({id: response.data.id_member})
            localStorage.setItem('status', response.data.status);
            this.setState({status: response.data.status});
        })
        .catch(error => {
            console.log('error', error);
        })
    }

    render() {
        const {name, id} = this.state;
            return (
                <div>
                    <Link to="/profile/" className="user"><label>Halo, {name}</label></Link>
                </div>
            );
    }
}

export default User;

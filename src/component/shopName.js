import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import NotifAvailable from './notifAvailable'
import NotifUsed from './notifUsed'

class RegisterShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopname : ""
          };
        this.postRegist = this.postRegist.bind(this);
    }

    state = {namatoko : "", metodePengiriman : ""};
    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    postRegist = () =>{
        const {namatoko, metodePengiriman} = this.state;
        const data={
            "nama_toko": namatoko,
            "id_metode_pengiriman": parseInt(metodePengiriman)
        };
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
            .post('https://bukuku.site/toko', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.setState({shopname: 'available'});
                localStorage.setItem('toko', true)
            })
            .catch(function(error){
                self.setState({shopname: 'used'});
                console.log(error);
            });
    };

    componentDidMount() {
        this.setState({shopname: ""});
        }

    render() {
        return (
        <div>
            <form action="#">
                <div className="row">
                    <div className="col-md-3">
                        <label for="nama-toko">Nama Toko</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" name="namatoko" onChange={e => this.changeInput(e)} id="nama-toko" required/>
                    </div>
                    <div className="col-md-3">
                        <label for="nama-toko">Metode Pengiriman</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" name="metodePengiriman" onChange={e => this.changeInput(e)} id="nama-toko" required/>
                    </div>
                </div>
                <button onClick={() =>this.postRegist()}>Cek kesediaan nama</button>
            </form>
            {(this.state.shopname == 'available') && <NotifAvailable />}
            {(this.state.shopname == 'used') && <NotifUsed />}
        </div>
        );
    }
}

export default RegisterShop;
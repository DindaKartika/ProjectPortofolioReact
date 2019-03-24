import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
import ViewDetailMember from './../component/memberDetail.js'
import ListBuy from './../component/kontenCart.js'

import MetodePembayaranLoop from './pilihanPembayaranLoop.js'
// import "./App.css"

class PilihanPembayaran extends Component {
    constructor(props){
        super(props);
        this.state = {
            Pembayaran: []
            };
        }

    componentDidMount = () =>{
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/admin/metode_pembayaran', {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        }
        )
        .then(function(response){
            self.setState({Pembayaran: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render() {
        const {Pembayaran} = this.state;
        return (
        <div>
            <h4>Pilihan pembayaran</h4>
            {Pembayaran.map((item, key) => {
                return <MetodePembayaranLoop key ={key} id_metode_pembayaran={item.id_metode_pembayaran} metode_pembayaran={item.metode_pembayaran} instansi={item.instansi} />;
            })}
        </div>
        );
    }
}

export default PilihanPembayaran;

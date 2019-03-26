import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import ListTransaksi from './../component/adminCartDetailLoop.js'

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class AdminCartPembelian extends Component {
    constructor(props){
        super(props);
        this.state = {
            Carts: {},
            Pembelians: [],
            Pembeli: {},
            method:{},
            qty: 1
            };
            this.Stage = this.Stage.bind(this);
            this.Pay = this.Pay.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_cart = this.props.location.pathname.slice(19)
        console.log(id_cart)
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/admin/cart/' + id_cart, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Carts: response.data});
            self.setState({Pembelians: response.data.pembelian})
            self.setState({Pembeli: response.data.pembeli})
            localStorage.setItem('Cart', response.data)
            localStorage.setItem('Pembelian', response.data.pembelian)
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Stage(){
        const self = this;
        const {Carts} = this.state;
        const {method} = this.state;
        const id_cart = this.props.location.pathname.slice(19)
        const data={
            status: 'staged'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/cart/' + id_cart, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/cart"))
            self.props.history.push("/admin/cart");
        })
        .catch(error => {
            console.log(error);
        })
    }

    Pay(){
        const self = this;
        const {Carts} = this.state;
        const {method} = this.state;
        const id_cart = this.props.location.pathname.slice(19)
        const data={
            status: 'payed'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/cart/' + id_cart, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/cart"))
            self.props.history.push("/admin/cart");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Carts} = this.state;
        const {Pembelians} = this.state;
        const {Pembeli} = this.state;
        console.log(Pembelians)

        return (
        <div>
            <section class="isi-detail-buku">
                <div class="detail-box">
                    <h1>Detail Cart</h1>
                    <hr/>
                    <div class="row">
                        <div class="col-md-2">
                            <label>Pembeli</label>
                        </div>
                        <div class="col-md-10">
                            <span>{Pembeli.username}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label>Total Barang</label>
                        </div>
                        <div class="col-md-10">
                            <span>{Carts.total_barang}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label>Status</label>
                        </div>
                        <div class="col-md-5">
                            <span>{Carts.status}</span>
                        </div>
                        <div className="col-md-5">
                            <button onClick={this.Stage} style={{display: (Carts.status == 'unfinished') ? 'block' : 'none' }}>Stage</button>
                            <button onClick={this.Pay} style={{display: (Carts.status == 'staged') ? 'block' : 'none' }}>Finish</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label>Total Pembayaran</label>
                        </div>
                        <div class="col-md-10">
                            <span>Rp {Carts.total_pembayaran},00</span>
                        </div>
                    </div>
                        {Pembelians.map((item, key) => {
                            return <ListTransaksi key ={key} id={item.id_buku} buku={item.buku} jumlah={item.jumlah} total_harga={item.total_harga} toko={item.toko} metode_pengiriman={item.metode_pengiriman}/>;
                        })}
                </div>
            </section>
        </div>
        );
    }
}

export default withRouter(AdminCartPembelian)

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class AdminTransaksiDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Transactions: {},
            Payments: {},
            qty: 1
            };
            this.Process = this.Process.bind(this);
            this.Finish = this.Finish.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_toko = this.props.location.pathname.slice(24)
        console.log(id_toko)
        const tokens = localStorage.getItem('token')
        axios
        .get('https://bukuku.site/admin/transaksi/' + id_toko, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Transactions: response.data});
            self.setState({Payments: response.data.pembayaran})
            console.log(response.data);
            console.log(response.data.pembayaran)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Process(){
        const self = this;
        const id_toko = this.props.location.pathname.slice(24)
        const data={
            status: 'processed'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/admin/transaksi/' + id_toko, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/transaksi"))
            self.props.history.push("/admin/transaksi");
        })
        .catch(error => {
            console.log(error);
        })
    }

    Finish(){
        const self = this;
        const id_toko = this.props.location.pathname.slice(24)
        const data={
            status: 'finished'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/admin/transaksi/' + id_toko, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/transaksi"))
            self.props.history.push("/admin/transaksi");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Transactions, Payments} = this.state;
        return (
            <div>
                 <section class="isi-detail-buku">
                    <div class="detail-box">
                        <h1>Detail Transaksi</h1>
                        <hr/>
                        <div class="row">
                            <div class="col-md-2">
                                <label>ID Cart</label>
                            </div>
                            <div class="col-md-10">
                                <span>{Transactions.id_cart}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>Metode Pembayaran</label>
                            </div>
                            <div class="col-md-10">
                                <span>{Payments.metode_pembayaran}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>Instansi</label>
                            </div>
                            <div class="col-md-10">
                                <span>{Payments.instansi}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>Status</label>
                            </div>
                            <div class="col-md-5">
                                <span>{Transactions.status}</span>   
                            </div>
                            <div class="col-md-5">
                                <button onClick={this.Process} style={{display: (Transactions.status == 'staged') ? 'block' : 'none' }}>Process</button>
                                <button onClick={this.Finish} style={{display: (Transactions.status == 'processed') ? 'block' : 'none' }}>Finish</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(AdminTransaksiDetail)

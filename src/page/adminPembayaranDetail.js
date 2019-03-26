import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import ListTransaksi from './../component/adminCartDetailLoop.js'

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class AdminPembayaranDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Pembayarans: {},
            qty: 1
            };
            this.Active = this.Active.bind(this);
            this.Inactive = this.Inactive.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_metode_pembayaran = this.props.location.pathname.slice(32)
        console.log(id_metode_pembayaran)
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/admin/metode_pembayaran/' + id_metode_pembayaran, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Pembayarans: response.data});
            localStorage.setItem('Pembayaran', response.data)
            localStorage.setItem('Pembelian', response.data.pembelian)
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Active(){
        const self = this;
        const id_pembayaran = this.props.location.pathname.slice(32)
        const data={
            status: 'active'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/metode_pembayaran/' + id_pembayaran, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/pembayaran"))
            self.props.history.push("/admin/pembayaran");
        })
        .catch(error => {
            console.log(error);
        })
    }

    Inactive(){
        const self = this;
        const id_pembayaran = this.props.location.pathname.slice(32)
        const data={
            status: 'inactive'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/metode_pembayaran/' + id_pembayaran, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/pembayaran"))
            self.props.history.push("/admin/pembayaran");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Pembayarans} = this.state;
        console.log(Pembayarans)

        return (
        <div>
            <section class="isi-detail-buku">
                <div class="detail-box">
                    <h1>Detail Metode Pembayaran</h1>
                    <hr/>
                    <div class="row">
                        <div class="col-md-2">
                            <label for="judul">Metode Pembayaran</label>
                        </div>
                        <div class="col-md-10">
                            <span>{Pembayarans.metode_pembayaran}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label for="harga">Instansi</label>
                        </div>
                        <div class="col-md-10">
                            <span>{Pembayarans.instansi}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label for="kategori">Status</label>
                        </div>
                        <div class="col-md-5">
                            <span>{Pembayarans.status}</span>
                        </div>
                        <div class="col-md-5">
                            <button onClick={this.Active} style={{display: (Pembayarans.status == 'active') ? 'none' : 'block' }}>Ubah Status</button>
                            <button onClick={this.Inactive} style={{display: (Pembayarans.status == 'inactive') ? 'none' : 'block' }}>Ubah Status</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default withRouter(AdminPembayaranDetail)

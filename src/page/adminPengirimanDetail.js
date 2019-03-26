import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import ListTransaksi from './../component/adminCartDetailLoop.js'

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class AdminPengirimanDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Pengirimans: {},
            qty: 1
            };
            this.Active = this.Active.bind(this);
            this.Inactive = this.Inactive.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_metode_pengiriman = this.props.location.pathname.slice(32)
        console.log(id_metode_pengiriman)
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/admin/metode_pengiriman/' + id_metode_pengiriman, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Pengirimans: response.data});
            localStorage.setItem('Pengiriman', response.data)
            localStorage.setItem('Pembelian', response.data.pembelian)
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Active(){
        const self = this;
        const id_pengiriman = this.props.location.pathname.slice(32)
        const data={
            status: 'active'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/metode_pengiriman/' + id_pengiriman, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/pengiriman"))
            self.props.history.push("/admin/pengiriman");
        })
        .catch(error => {
            console.log(error);
        })
    }

    Inactive(){
        const self = this;
        const id_pengiriman = this.props.location.pathname.slice(32)
        const data={
            status: 'inactive'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/metode_pengiriman/' + id_pengiriman, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/pengiriman"))
            self.props.history.push("/admin/pengiriman");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Pengirimans} = this.state;
        console.log(Pengirimans)

        return (
        <div>
            <section class="isi-detail-buku">
                <div class="detail-box">
                    <h1>Detail Metode Pengiriman</h1>
                    <hr/>
                    <div class="row">
                        <div class="col-md-2">
                            <label for="judul">Metode Pengiriman</label>
                        </div>
                        <div class="col-md-10">
                            <span>{Pengirimans.metode}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label for="harga">Kurir</label>
                        </div>
                        <div class="col-md-10">
                            <span>{Pengirimans.kurir}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label for="kategori">Status</label>
                        </div>
                        <div class="col-md-5">
                            <span>{Pengirimans.status}</span>
                        </div>
                        <div class="col-md-5">
                            <button onClick={this.Active} style={{display: (Pengirimans.status == 'active') ? 'none' : 'block' }}>Ubah Status</button>
                            <button onClick={this.Inactive} style={{display: (Pengirimans.status == 'inactive') ? 'none' : 'block' }}>Ubah Status</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default withRouter(AdminPengirimanDetail)

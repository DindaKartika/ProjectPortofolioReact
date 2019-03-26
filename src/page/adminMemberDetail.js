import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class AdminMemberDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Members: {},
            Details: {},
            Shop: {},
            method:{},
            qty: 1
            };
            this.Pembeli = this.Pembeli.bind(this);
            this.Penjual = this.Penjual.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_member = this.props.location.pathname.slice(21)
        console.log(id_member)
        const tokens = localStorage.getItem('token')
        axios
        .get('https://bukuku.site/admin/member/' + id_member, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Members: response.data});
            self.setState({Details: response.data.detail})
            localStorage.setItem('book', response.data)
            localStorage.setItem('shop', response.data.shop)
            console.log(response.data);
            console.log(response.data.detail)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Pembeli(){
        const self = this;
        const {Members} = this.state;
        const {method} = this.state;
        const id_member = this.props.location.pathname.slice(21)
        const data={
            status: 'pembeli'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/admin/member/' + id_member, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/member"))
            self.props.history.push("/admin/member");
        })
        .catch(error => {
            console.log(error);
        })
    }

    Penjual(){
        const self = this;
        const {Members} = this.state;
        const {method} = this.state;
        const id_member = this.props.location.pathname.slice(21)
        const data={
            status: 'penjual'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/admin/member/' + id_member, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/member"))
            self.props.history.push("/admin/member");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Members} = this.state;
        const {Details} = this.state;

        if (Members.status != 'admin'){
            return (
                <div>
                    <section class="isi-detail-buku">
                        <div class="detail-box">
                            <h1>Detail Member</h1>
                            <hr/>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Nama Depan</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.nama_depan}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Nama Belakang</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.nama_belakang}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Username</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.username}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>email</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.email}</span>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Nama</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.nama}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Telepon</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.telepon}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Alamat</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.alamat_lengkap}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Kecamatan</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.kecamatan}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Kota</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.kota}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Kode Pos</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.kode_pos}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Status</label>
                                </div>
                                <div class="col-md-5">
                                    <span>{Members.status}</span>   
                                </div>
                                <div class="col-md-5">
                                    <button onClick={this.Pembeli} style={{display: (Members.status == 'pembeli') ? 'none' : 'block' }}>Ubah Status</button>
                                    <button onClick={this.Penjual} style={{display: (Members.status == 'penjual') ? 'none' : 'block' }}>Ubah Status</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                );
        }
        else{
            return (
                <div>
                    <section class="isi-detail-buku">
                        <div class="detail-box">
                            <h1>Detail Member</h1>
                            <hr/>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Nama Depan</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.nama_depan}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Nama Belakang</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.nama_belakang}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Username</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.username}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>email</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.email}</span>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Nama</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.nama}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Telepon</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.telepon}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Alamat</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.alamat_lengkap}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Kecamatan</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.kecamatan}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Kota</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.kota}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Kode Pos</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Details.kode_pos}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Status</label>
                                </div>
                                <div class="col-md-10">
                                    <span>{Members.status}</span>   
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
        
    }
}

export default withRouter(AdminMemberDetail)

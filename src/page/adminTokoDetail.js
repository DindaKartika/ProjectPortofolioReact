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
            Tokos: {},
            Details: {},
            Pemiliks: {},
            Pengirimans:{},
            qty: 1
            };
            this.Active = this.Active.bind(this);
            this.Inactive = this.Inactive.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_toko = this.props.location.pathname.slice(19)
        console.log(id_toko)
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/admin/toko/' + id_toko, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Tokos: response.data});
            self.setState({Details: response.data.detail})
            self.setState({Pemiliks: response.data.pemilik})
            self.setState({Pengirimans: response.data.pengiriman})
            localStorage.setItem('book', response.data)
            localStorage.setItem('shop', response.data.shop)
            console.log(response.data);
            console.log(response.data.detail)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Active(){
        const self = this;
        const {Tokos} = this.state;
        const {method} = this.state;
        const id_toko = this.props.location.pathname.slice(19)
        const data={
            status: 'active'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/toko/' + id_toko, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/toko"))
            self.props.history.push("/admin/toko");
        })
        .catch(error => {
            console.log(error);
        })
    }

    Inactive(){
        const self = this;
        const {Tokos} = this.state;
        const {method} = this.state;
        const id_toko = this.props.location.pathname.slice(19)
        const data={
            status: 'inactive'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/admin/toko/' + id_toko, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/toko"))
            self.props.history.push("/admin/toko");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Tokos, Details, Pemiliks, Pengirimans} = this.state;
        return (
            <div>
                <section className="isi-detail-buku">
                    <div className="detail-box">
                        <h1>Detail Toko</h1>
                        <hr/>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="judul">Nama</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Tokos.nama_toko}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="harga">Pemilik</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Pemiliks.username}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="kategori">Rating toko</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Tokos.rating}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="gambar">Metode Pengiriman</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Pengirimans.kurir}</span>&nbsp;
                                <span>{Pengirimans.metode}</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="isbn">Alamat</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Details.alamat_lengkap}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="penulis">Kecamatan</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Details.kecamatan}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="penerbit">Kota</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Details.kota}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="jumlah_halaman">Kode Pos</label>
                            </div>
                            <div className="col-md-10">
                                <span>{Details.kode_pos}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label for="stok">Status</label>
                            </div>
                            <div className="col-md-5">
                                <span>{Tokos.status}</span>   
                            </div>
                            <div class="col-md-5">
                                <button onClick={this.Active} style={{display: (Tokos.status == 'active') ? 'none' : 'block' }}>Ubah Status</button>
                                <button onClick={this.Inactive} style={{display: (Tokos.status == 'inactive') ? 'none' : 'block' }}>Ubah Status</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(AdminMemberDetail)

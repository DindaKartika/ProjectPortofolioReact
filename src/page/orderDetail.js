import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import Resign from './../image/Book/novel/resign.jpg'
import Minus from './../image/icon/minus-blue.png'
import Plus from './../image/icon/plus.png'

import JNE from './../image/logo/jne.png'
import JNT from './../image/logo/j&t.png'
import Pos from './../image/logo/pos.png'
import Wahana from './../image/logo/wahana.png'

class OrderDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Pembelian: {},
            Pembeli: {},
            DetailPembeli: {},
            Buku: {},
            Pengiriman: {},
            ubahResi : false
            };
        this.UbahResi = this.UbahResi.bind(this)
        this.EditResi = this.EditResi.bind(this)
        }

    componentDidMount = () =>{
        const self = this;
        const tokens = localStorage.getItem('token')
        const id_penjualan = this.props.location.pathname.slice(14)
        axios
        .get('https://bukuku.site/toko/penjualan/' + id_penjualan, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(function(response){
            self.setState({Pembelian: response.data});
            self.setState({Pembeli: response.data.pembeli});
            self.setState({DetailPembeli: response.data.detail_pembeli});
            self.setState({Buku: response.data.buku});
            self.setState({Pengiriman: response.data.pengiriman})
            self.setState({nomor_resi: response.data.nomor_resi})
            console.log(response.data);
            console.log(response.data.pembeli);
            console.log(response.data.detail_pembeli);
            console.log(response.data.buku);
            console.log(response.data.pengiriman);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    UbahResi() {
        this.setState(prevState => ({
            ubahResi: !prevState.ubahResi
            }));
        }
    
    EditResi(){
        const self = this;
        const id_penjualan = this.props.location.pathname.slice(14)
        console.log(id_penjualan)
        const {nomor_resi} = this.state;
        const data={
            nomor_resi: nomor_resi
        };
        console.log(data)
        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/toko/penjualan/' + id_penjualan, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            self.setState({ubahResi: false})
            self.props.history.push('/pesanan-saya');
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Pembelian, DetailPembeli, Buku, Pengiriman, ubahResi} = this.state;
        return (
        <div>
            <section className="isi-detail-buku">
                <div className="detail-box">
                    <h1>Detail Penjualan</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Buku</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Buku.judul_buku}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Jumlah</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Pembelian.jumlah}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Metode Pengiriman</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Pengiriman.kurir}</span>&nbsp;
                            <span>{Pengiriman.metode}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Nomor Resi</label>
                        </div>
                        <div className="col-md-5">
                            <span style={{display: (ubahResi) ? 'none' : 'block' }}>{Pembelian.nomor_resi}</span>
                            <input style={{display: !(ubahResi) ? 'none' : 'block' }} type="text" name="nomor_resi" onChange={e => this.changeInput(e)} defaultValue={Pembelian.nomor_resi}/>
                        </div>
                        <div className="col-md-5">
                            <button style={{display: (ubahResi) ? 'none' : 'block' }} onClick={this.UbahResi}>Ubah Nomor Resi</button>
                            <button style={{display: !(ubahResi) ? 'none' : 'block' }} onClick={this.EditResi}>Simpan</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Nama</label>
                        </div>
                        <div className="col-md-10">
                            <span>{DetailPembeli.nama}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Telepon</label>
                        </div>
                        <div className="col-md-10">
                            <span>{DetailPembeli.telepon}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Alamat</label>
                        </div>
                        <div className="col-md-10">
                            <span>{DetailPembeli.alamat_lengkap}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kecamatan</label>
                        </div>
                        <div className="col-md-10">
                            <span>{DetailPembeli.kecamatan}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kota</label>
                        </div>
                        <div className="col-md-10">
                            <span>{DetailPembeli.kota}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kode Pos</label>
                        </div>
                        <div className="col-md-10">
                            <span>{DetailPembeli.kode_pos}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default OrderDetail;

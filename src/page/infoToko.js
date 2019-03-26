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

class InfoToko extends Component {
    constructor(props){
        super(props);
        this.state = {
            Toko: {},
            Details: {},
            ubahNama : false,
            ubahInfo : false,
            };
        this.UbahNama = this.UbahNama.bind(this)
        this.UbahInfo = this.UbahInfo.bind(this)
        this.EditNama = this.EditNama.bind(this)
        this.EditInfo = this.EditInfo.bind(this)
        this.Active = this.Active.bind(this)
        this.Inactive = this.Inactive.bind(this)
        }

    componentDidMount = () =>{
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
        .get('http://0.0.0.0:5000/toko/me', {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(function(response){
            self.setState({Toko: response.data});
            self.setState({Details: response.data.detail});
            self.setState({nama: response.data.nama_toko});
            self.setState({status: response.data.status});
            self.setState({alamat_lengkap: response.data.detail.alamat_lengkap});
            self.setState({kota: response.data.detail.kota});
            self.setState({kecamatan: response.data.detail.kecamatan});
            self.setState({kode_pos: response.data.detail.kode_pos});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    UbahNama() {
        this.setState(prevState => ({
            ubahNama: !prevState.ubahNama
            }));
        }

    UbahInfo() {
        this.setState(prevState => ({
            ubahInfo: !prevState.ubahInfo
            }));
        }
    
    EditNama(){
        const self = this;
        const {nama_toko} = this.state;
        const data={
            nama_toko: nama_toko
        };
        console.log(data)
        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/toko/me', data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            self.setState({ubahEmail: false})
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        })
    }

    EditInfo(){
        const self = this;
        const {alamat_lengkap, kota, kecamatan, kode_pos} = this.state;
        const data={
            alamat_lengkap: alamat_lengkap,
            kota: kota,
            kecamatan: kecamatan,
            kode_pos: kode_pos
        };
        console.log(data)
        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/detail_toko', data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            self.setState({ubahToko: false})
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        })
    }

    Active(){
        const self = this;
        const data={
            status: 'active'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/toko/me', data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        })
    }

    Inactive(){
        const self = this;
        const data={
            status: 'inactive'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/toko/me', data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Toko, Details, ubahNama, ubahInfo} = this.state;
        return (
        <div>
            <section className="isi-detail-buku">
                <div className="detail-box">
                    <h1>Detail Toko</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Nama Toko</label>
                        </div>
                        <div className="col-md-5">
                            <span style={{display: (ubahNama) ? 'none' : 'block' }}>{Toko.nama_toko}</span>
                            <input style={{display: !(ubahNama) ? 'none' : 'block' }} type="text" name="nama_toko" onChange={e => this.changeInput(e)} defaultValue={Toko.nama_toko}/>
                        </div>
                        <div className="col-md-5">
                            <button style={{display: (ubahNama) ? 'none' : 'block' }} onClick={this.UbahNama}>Ubah Nama Toko</button>
                            <button style={{display: !(ubahNama) ? 'none' : 'block' }} onClick={this.EditNama}>Simpan</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Rating</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Toko.rating}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Metode Pengiriman</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Toko.id_metode_pengiriman}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Status</label>
                        </div>
                        <div className="col-md-5">
                            <span>{Toko.status}</span>
                        </div>
                        <div className="col-md-5">
                            <button onClick={this.Active} style={{display: (Toko.status == 'active') ? 'none' : 'block' }}>Ubah Status 1</button>
                            <button onClick={this.Inactive} style={{display: (Toko.status == 'inactive') ? 'none' : 'block' }}>Ubah Status 2</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Alamat</label>
                        </div>
                        <div className="col-md-10">
                            <span style={{display: (ubahInfo) ? 'none' : 'block' }}>{Details.alamat_lengkap}</span>
                            <input style={{display: !(ubahInfo) ? 'none' : 'block' }} type="text" name="alamat_lengkap" onChange={e => this.changeInput(e)} defaultValue={Details.alamat_lengkap}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kecamatan</label>
                        </div>
                        <div className="col-md-10">
                            <span style={{display: (ubahInfo) ? 'none' : 'block' }}>{Details.kecamatan}</span>
                            <input style={{display: !(ubahInfo) ? 'none' : 'block' }} type="text" name="kecamatan" onChange={e => this.changeInput(e)} defaultValue={Details.kecamatan}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kota</label>
                        </div>
                        <div className="col-md-10">
                            <span style={{display: (ubahInfo) ? 'none' : 'block' }}>{Details.kota}</span>
                            <input style={{display: !(ubahInfo) ? 'none' : 'block' }} type="text" name="kota" onChange={e => this.changeInput(e)} defaultValue={Details.kota}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kode Pos</label>
                        </div>
                        <div className="col-md-10">
                            <span style={{display: (ubahInfo) ? 'none' : 'block' }}>{Details.kode_pos}</span>
                            <input style={{display: !(ubahInfo) ? 'none' : 'block' }} type="text" name="kode_pos" onChange={e => this.changeInput(e)} defaultValue={Details.kode_pos}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button style={{display: (ubahInfo) ? 'none' : 'block' }} onClick={this.UbahInfo}>Edit Info</button>
                            <button style={{display: !(ubahInfo) ? 'none' : 'block' }} onClick={this.EditInfo}>Simpan</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Status</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Toko.status}</span>   
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default InfoToko;

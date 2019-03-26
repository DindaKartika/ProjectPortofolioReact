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

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            Info: {},
            Details: {},
            ubahEmail : false,
            ubahInfo : false,
            };
        this.UbahEmail = this.UbahEmail.bind(this)
        this.UbahInfo = this.UbahInfo.bind(this)
        this.EditEmail = this.EditEmail.bind(this)
        this.EditInfo = this.EditInfo.bind(this)
        }

    componentDidMount = () =>{
        const self = this;
        const tokens = localStorage.getItem('token')
        console.log(this.state.selectedPage)
        axios
        .get('https://bukuku.site/member/me', {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(function(response){
            self.setState({Info: response.data});
            self.setState({Details: response.data.detail});
            self.setState({email: response.data.email});
            self.setState({nama: response.data.detail.nama});
            self.setState({telepon: response.data.detail.telepon});
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

    UbahEmail() {
        this.setState(prevState => ({
            ubahEmail: !prevState.ubahEmail
            }));
        }

    UbahInfo() {
        this.setState(prevState => ({
            ubahInfo: !prevState.ubahInfo
            }));
        }
    
    EditEmail(){
        const self = this;
        const id_member = this.state.Info.id_member
        console.log(id_member)
        const {email} = this.state;
        const data={
            email: email
        };
        console.log(data)
        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/member/me', data, {
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
        const id_member = this.state.Info.id_member
        const {alamat_lengkap, kota, kecamatan, kode_pos, telepon, nama} = this.state;
        const data={
            nama: nama,
            telepon: telepon,
            alamat_lengkap: alamat_lengkap,
            kota: kota,
            kecamatan: kecamatan,
            kode_pos: kode_pos
        };
        console.log(data)
        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/detail_member/me/' + id_member, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            self.setState({ubahInfo: false})
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Info, Details, ubahEmail, ubahInfo} = this.state;
        return (
        <div>
            <section className="isi-detail-buku">
                <div className="detail-box">
                    <h1>Detail Member</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Nama Depan</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Info.nama_depan}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Nama Belakang</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Info.nama_belakang}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Username</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Info.username}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>email</label>
                        </div>
                        <div className="col-md-5">
                            <span style={{display: (ubahEmail) ? 'none' : 'block' }}>{Info.email}</span>
                            <input style={{display: !(ubahEmail) ? 'none' : 'block' }} type="text" name="email" onChange={e => this.changeInput(e)} defaultValue={Info.email}/>
                        </div>
                        <div className="col-md-5">
                            <button style={{display: (ubahEmail) ? 'none' : 'block' }} onClick={this.UbahEmail}>Ubah Email</button>
                            <button style={{display: !(ubahEmail) ? 'none' : 'block' }} onClick={this.EditEmail}>Simpan</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>password</label>
                        </div>
                        <div className="col-md-10">
                            <span>***************</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Nama</label>
                        </div>
                        <div className="col-md-10">
                            <span style={{display: (ubahInfo) ? 'none' : 'block' }}>{Details.nama}</span>
                            <input style={{display: !(ubahInfo) ? 'none' : 'block' }} type="text" name="alamat_lengkap" onChange={e => this.changeInput(e)} defaultValue={Details.nama}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Telepon</label>
                        </div>
                        <div className="col-md-10">
                            <span style={{display: (ubahInfo) ? 'none' : 'block' }}>{Details.telepon}</span>
                            <input style={{display: !(ubahInfo) ? 'none' : 'block' }} type="text" name="telepon" onChange={e => this.changeInput(e)} defaultValue={Details.telepon}/>
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
                            <button style={{display: (ubahInfo) ? 'none' : 'block' }} onClick={this.UbahInfo}>Ubah Info</button>
                            <button style={{display: !(ubahInfo) ? 'none' : 'block' }} onClick={this.EditInfo}>Simpan</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Status</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Info.status}</span>   
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Profile;

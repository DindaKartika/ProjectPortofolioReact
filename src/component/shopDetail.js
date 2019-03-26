import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

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

class RegisterShop extends Component {
    constructor(props) {
        super(props);
        this.postRegist = this.postRegist.bind(this);
    }

    state = {alamatlengkap:"", kota:"", kecamatan:"", kodepos:""};
    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    postRegist = () =>{
        const {alamatlengkap, kota, kecamatan, kodepos} = this.state;
        const data={
            alamat_lengkap: alamatlengkap,
            kota: kota,
            kecamatan: kecamatan,
            kodepos: kodepos

        };
        const tokens = localStorage.getItem('token')
        const self = this;
        axios
            .post('https://bukuku.site/detail_toko', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.props.history.push('/buku-saya');
            })
            .catch(function(error){
                console.log(error);
            });
    };
    render() {
        return (
        <div>
            <form>
                <br/>
                <h3 style={{textAlign: 'center'}}>Alamat Toko</h3>
                <div className="row">
                    <div className="col-md-3">
                        <label for="alamat-lengkap">Alamat Lengkap</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" name="alamatlengkap" id="alamat-lengkap" onChange={e => (this.changeInput(e))} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label for="kecamatan">Kecamatan</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" name="kecamatan" id="kecamatan" onChange={e => (this.changeInput(e))} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label for="kota">Kota</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" name="kota" id="kota" onChange={e => (this.changeInput(e))} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label for="kode-pos">Kode Pos</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" name="kodepos" id="kode-pos" onChange={e => (this.changeInput(e))} required/>
                    </div>
                </div>
                <button onClick={() =>this.postRegist()}>Daftar</button>
            </form>
        </div>
        );
    }
}

export default RegisterShop;

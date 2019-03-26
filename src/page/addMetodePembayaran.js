import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"
import NotifAvailable from './../component/notifAvailable.js'

class AddPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register : "",
            id_buku: 0
          };
        this.postRegist = this.postRegist.bind(this);
    }

    state = {metode_pembayaran:"", instansi: ""};

    handleChange(event) {
        this.setState({
          kondisi: event.target.value
        });
      }

    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    postRegist(){
        const {metode_pembayaran, instansi} = this.state;
        const data={
            "metode_pembayaran" : metode_pembayaran,
            "instansi" : instansi
        };
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
            .post('http://0.0.0.0:5000/admin/metode_pembayaran', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.props.history.push('/admin/pembayaran')
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render() {
            return (
                <div>
                    <section class="isi-book-info">
                        <div class="info-box">
                            <h1>Tambah Metode Pembayaran</h1>
                            <hr/>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="judul">Metode Pembayaran</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="metode_pembayaran" id="judul" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="harga">Instansi</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="instansi" id="harga" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                </div>
                                <button onClick={() =>this.postRegist()} type="submit">Simpan</button>
                        </div>
                    </section>
                </div>
        );
    }
}

export default AddPayment;

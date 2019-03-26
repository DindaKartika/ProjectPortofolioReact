import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class AdminBukuDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Books: {},
            Details: {},
            Shop: {},
            method:{},
            qty: 1
            };
            this.dijual = this.dijual.bind(this);
            this.tidakDijual = this.tidakDijual.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_buku = this.props.location.pathname.slice(19)
        console.log(id_buku)
        const tokens = localStorage.getItem('token')
        axios
        .get('https://bukuku.site/admin/buku/' + id_buku, {headers:{
            'Authorization' : 'Bearer ' + tokens
        }})
        .then(function(response){
            self.setState({Books: response.data});
            self.setState({Details: response.data.detail})
            self.setState({Shop: response.data.shop})
            localStorage.setItem('book', response.data)
            localStorage.setItem('shop', response.data.shop)
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    dijual(){
        const self = this;
        const {Books} = this.state;
        const {method} = this.state;
        const id_buku = this.props.location.pathname.slice(19)
        const data={
            status: 'dijual'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/admin/buku/' + id_buku, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/buku"))
            self.props.history.push("/admin/buku");
        })
        .catch(error => {
            console.log(error);
        })
    }

    tidakDijual(){
        const self = this;
        const {Books} = this.state;
        const {method} = this.state;
        const id_buku = this.props.location.pathname.slice(19)
        const data={
            status: 'tidak dijual'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('https://bukuku.site/admin/buku/' + id_buku, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/admin/buku"))
            self.props.history.push("/admin/buku");
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Books} = this.state;
        const {Details} = this.state;
        const {Shop} = this.state;

        return (
        <div>
            <section className="isi-detail-buku">
                <div className="detail-box">
                    <h1>Detail Buku</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Judul</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Books.judul_buku}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Harga</label>
                        </div>
                        <div className="col-md-10">
                            <span>Rp {Books.harga},00</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kategori</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Books.kategori}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Gambar</label>
                        </div>
                        <div className="col-md-10">
                            <img src={Books.gambar}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kode Promo</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Books.kode_promo}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Kondisi</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Books.kondisi}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label>ISBN</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Details.isbn}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Penulis</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Details.penulis}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Penerbit</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Details.penerbit}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Jumlah Halaman</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Details.jumlah_halaman}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Sinopsis</label>
                        </div>
                        <div className="col-md-10">
                            <p>{Details.sinopsis}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Stok</label>
                        </div>
                        <div className="col-md-10">
                            <span>{Details.stok}</span>   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Status</label>
                        </div>
                        <div className="col-md-5">
                            <span>{Books.status}</span>
                        </div>
                        <div className="col-md-5">
                            <button onClick={this.dijual} style={{display: (Books.status == 'dijual') ? 'none' : 'block' }}>Ubah Status</button>
                            <button onClick={this.tidakDijual} style={{display: (Books.status == 'tidak dijual') ? 'none' : 'block' }}>Ubah Status</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default withRouter(AdminBukuDetail)

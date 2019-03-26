import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
import ViewDetailMember from './../component/memberDetail.js'
import ListBuy from './../component/kontenCart.js'
// import "./App.css"
import PilihanPembayaran from './../component/pilihanPembayaran.js'

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            Cart: {},
            Pembelian: []
            };
        this.Bayar = this.Bayar.bind(this)
        }

    componentDidMount = () =>{
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
        .get('https://bukuku.site/cart/me', {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        }
        )
        .then(function(response){
            self.setState({Cart: response.data});
            localStorage.setItem(Cart, response.data)
            self.setState({Pembelian: response.data.pembelian})
            console.log(response.data.pembelian)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    Bayar(){
        const {Cart} = this.state;
        const data={
            id_cart: Cart.id_cart,
            id_metode_pembayaran: 1
        };
        const tokens = localStorage.getItem('token')
        const self = this;
        axios
            .post('https://bukuku.site/transaksi/me', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.props.history.push('/');
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render() {
        const {Cart} = this.state;
        const {Pembelian} = this.state;
        console.log('pembelian', Pembelian)
        console.log(Cart)
        const is_login = JSON.parse(localStorage.getItem('is_login'))
        if(is_login === null){
            return (
                <div className="isi-details">
                    <div className="details-box">
                        <span>Anda belum login. Silahkan login dulu</span>
                        <Link to="/"><button>Beranda</button></Link>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                <section className="isi-details">
                    <h2>Cart</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="cart-box">
                                <ViewDetailMember />
                            </div>
                            <div className="cart-box">
                                <h4>Pembelian</h4>
                                {Pembelian.map((item, key) => {
                                    return <ListBuy key ={key} id={item.id_pembelian} judul={item.id_buku} toko={item.id_toko} harga={item.total_harga} jumlah={item.jumlah} metode_pengiriman={item.id_metode_pengiriman}/>;
                                })}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cart-box">
                                <h4>Pembayaran</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Total barang</label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>{Cart.total_barang}</label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Total pembayaran</label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Rp {Cart.total_pembayaran},00</label>
                                    </div>
                                </div>
                                <p>* harga belum termasuk biaya pengiriman</p>
                                <br/>
                                <h4>Pembayaran : </h4>
                                <label>Transfer Bank XYZ</label>
                                <label>Rekening : 093210484324</label>
                                <button onClick={this.Bayar}>Bayar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            )
        }

    }
}

export default Cart;

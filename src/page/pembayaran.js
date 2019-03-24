// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios'

// import "./../css/bootstrap.min.css";
// import "./../css/main.css";
// import ViewDetailMember from './../component/memberDetail.js'
// import ListBuy from './../component/kontenCart.js'
// // import "./App.css"

// class Bayar extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             Cart: {},
//             Pembelian: []
//             };
//         this.toggle = this.toggle.bind(this);
//         }

//     componentDidMount = () =>{
//         const self = this;
//         const tokens = localStorage.getItem('token')
//         axios
//         .get('http://0.0.0.0:5000/cart/me', {
//             headers:{
//                 'Authorization' : 'Bearer ' + tokens
//             }
//         }
//         )
//         .then(function(response){
//             self.setState({Cart: response.data});
//             self.setState({Pembelian: response.data.pembelian})
//             console.log(response.data.pembelian)
//         })
//         .catch(function(error){
//             console.log(error);
//         })
//     }

//     render() {
//         const Cart = JSON.parse(localStorage.getItem('Cart'))
//         return (
//         <div>
//             <section className="isi-details">
//                 <h2>Cart</h2>
//                 <div className="row">
//                     <div className="col-md-8">
//                         <div className="details-box">
//                             <ViewDetailMember />
//                         </div>
//                         <div className="details-box">
//                             <h4>Pembelian</h4>
//                             {Pembelian.map((item, key) => {
//                                 return <ListBuy key ={key} judul={item.id_buku} toko={item.id_toko} harga={item.total_harga} jumlah={item.jumlah} metode_pengiriman={item.id_metode_pengiriman}/>;
//                             })}
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="details-box">
//                             <h4>Pembayaran</h4>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <label>Total barang</label>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label>{Cart.total_barang}</label>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label>Total pembayaran</label>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label>Rp {Cart.total_pembayaran},00</label>
//                                 </div>
//                             </div>
//                             <p>* harga belum termasuk biaya pengiriman</p>
//                             <button onClick={this.signUp}>Bayar</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//         );
//     }
// }

// export default Bayar;

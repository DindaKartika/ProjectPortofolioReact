import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../page/home.js'
import Kategories from '../page/kategories.js';
import BookDetails from './../page/book-detail.js'
import Search from './../page/search.js'
import Example from './../page/modal.js'
import StartShop from './../page/startShop.js'
import Penerbits from '../page/penerbits.js'
import Penerbit from '../page/penerbit.js'
import SignUp from '../page/sign-up.js'
import RegisterShop from '../page/register-shop.js';
import Cart from './../page/cart.js'
import Penulis from './../page/penulis.js'
import AddBook from './../page/addBook.js'
import Product from './../page/product.js'
import Order from './../page/order.js'
import BookInfo from './../page/book-info.js'
import DeleteBook from './../page/deleteBook.js'
import Profile from './../page/profile.js'
import OrderDetail from './../page/orderDetail.js'
import AdminBuku from './../page/adminBuku.js'
import AdminCart from './../page/adminCart.js'
import AdminMember from './../page/adminMember.js'
import AdminPembayaran from './../page/adminPembayaran.js'
import AdminPengiriman from './../page/adminPengiriman.js'
import AdminToko from './../page/adminToko.js'
import AdminTransaksi from './../page/adminTransaksi.js'
import AdminBukuDetail from './../page/adminBukuDetail.js'
import AdminCartDetail from './../page/adminCartDetail.js'
import AdminMemberDetail from './../page/adminMemberDetail.js'
import AdminTokoDetail from './../page/adminTokoDetail.js'
import AdminTransaksiDetail from './../page/adminTransaksiDetail.js'
import AdminPembayaranDetail from './../page/adminPembayaranDetail.js'
import AdminPengirimanDetail from './../page/adminPengirimanDetail.js'
import AddPayment from './../page/addMetodePembayaran.js'
import AddShipment from './../page/addMetodePengiriman.js'
import InfoToko from './../page/infoToko.js'

// import Loadable from 'react-loadable';

// const AddUser = Loadable({
//     loader: () => import('./../page/sources.js'),
//     loading: () =><h3>Loading...</h3>
//   });


const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/kategori/:kategories" component={Kategories}/>
            <Route exact path="/detail-buku/:books" component={BookDetails}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/modal" component={Example}/>
            <Route exact path="/start-shop" component={StartShop}/>
            <Route exact path="/daftar-toko" component={RegisterShop}/>
            <Route exact path="/penerbit" component={Penerbit}/>
            <Route exact path="/penerbit/:penerbits" component={Penerbits}/>
            <Route exact path="/penulis/:penulis" component={Penulis}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path='/tambah-buku' component={AddBook}/>
            <Route exact path='/pesanan-saya' component={Order}/>
            <Route path='/produk-saya' component={Product}/>
            <Route exact path='/info-buku/:id' component={BookInfo}/>
            <Route exact path='/delete-book/:id_buku' component={DeleteBook}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/order-detail/:id" component={OrderDetail}/>
            <Route exact path="/admin/buku" component={AdminBuku}/>
            <Route exact path="/admin/cart" component={AdminCart}/>
            <Route exact path="/admin/member" component={AdminMember}/>
            <Route exact path="/admin/pembayaran" component={AdminPembayaran}/>
            <Route exact path="/admin/pengiriman" component={AdminPengiriman}/>
            <Route exact path="/admin/toko" component={AdminToko}/>
            <Route exact path="/admin/transaksi" component={AdminTransaksi}/>
            <Route exact path="/admin/detail-buku/:id" component={AdminBukuDetail}/>
            <Route exact path='/admin/detail-cart/:id' component={AdminCartDetail}/>
            <Route exact path='/admin/detail-member/:id' component={AdminMemberDetail}/>
            <Route exact path='/admin/detail-toko/:id' component={AdminTokoDetail}/>
            <Route exact path='/admin/detail-transaksi/:id' component={AdminTransaksiDetail}/>
            <Route exact path='/admin/detail-metode-pembayaran/:id' component={AdminPembayaranDetail}/>
            <Route exact path='/admin/detail-metode-pengiriman/:id' component={AdminPengirimanDetail}/>
            <Route exact path='/admin/tambah-pembayaran' component={AddPayment}/>
            <Route exact path='/admin/tambah-pengiriman' component={AddShipment}/>
            <Route exact path='/info-toko' component={InfoToko}/>
        </Switch>
    )
}


export default MainRoute;
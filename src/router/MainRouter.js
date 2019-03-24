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
import Admin from './../page/admin.js'
import Penulis from './../page/penulis.js'
import Bayar from './../page/pembayaran.js'
import AddBook from './../page/addBook.js'
import Product from './../page/product.js'
import Order from './../page/order.js'
import BookInfo from './../page/book-info.js'
import DeleteBook from './../page/deleteBook.js'

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
            <Route exact path="/admin/:pages" component={Admin}/>
            <Route exact path="/bayar" component={Bayar}/>
            <Route exact path='/tambah-buku' component={AddBook}/>
            <Route exact path='/pesanan-saya' component={Order}/>
            <Route path='/produk-saya' component={Product}/>
            <Route exact path='/info-buku' component={BookInfo}/>
            <Route exact path='/delete-book/:id_buku' component={DeleteBook}/>
        </Switch>
    )
}


export default MainRoute;
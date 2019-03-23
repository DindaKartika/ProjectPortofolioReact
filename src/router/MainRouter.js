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
            <Route exact path="/penerbit" component={Penerbit}/>
            <Route exact path="/penerbit/:penerbits" component={Penerbits}/>
            <Route exact path="/signup" component={SignUp}/>
            {/* <Route exact path="/" component={Home}/> */}
            {/* <Route component={NotMatch}/> */}
        </Switch>
    )
}


export default MainRoute;
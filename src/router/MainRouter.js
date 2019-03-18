import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../page/home.js'
import Kategori from '../page/kategori.js';
import Kategories from '../page/kategories.js';
import BookDetails from './../page/book-detail.js'
import Search from './../page/search.js'

// import Loadable from 'react-loadable';

// const AddUser = Loadable({
//     loader: () => import('./../page/sources.js'),
//     loading: () =><h3>Loading...</h3>
//   });


const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/kategori" component={Kategori}/>
            <Route exact path="/kategori/:kategories" component={Kategories}/>
            <Route exact path="/detail-buku/:books" component={BookDetails}/>
            <Route exact path="/search/:content" component={Search}/>

            {/* <Route component={NotMatch}/> */}
        </Switch>
    )
}


export default MainRoute;
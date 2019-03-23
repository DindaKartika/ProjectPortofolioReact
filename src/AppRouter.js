import React, {Component} from 'react';
import MainRouter from './router/MainRouter';
import {withRouter} from 'react-router-dom';

import Header from "./component/header.js";
import Footer from './component/footer.js'

import {connect} from 'unistore/react';
import {actions} from './store.js'

class AppAjax extends Component{
    postSignOut = () =>{
        // localStorage.removeItem('is_login');
        // localStorage.clear()
        this.props.postLogout();
        localStorage.setItem('status', 'public');
        this.props.history.push("/");
    };
    render() {
        return(
            <div className="app">
                <Header postSignOut={this.postSignOut}/>
                <MainRouter/>
                <Footer/>
            </div>
        )
    }
}

// export default withRouter(AppAjax);
export default connect("is_login",actions)(withRouter(AppAjax))
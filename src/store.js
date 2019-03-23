import createStore from 'unistore'
import {Provider, connect} from 'unistore/react'
import axios from 'axios'

const initialStates = {
    token : 0,
    email : "",
    password : "",
    full_name : "",
    username : "",
    is_login : false
}

export const store = createStore(initialStates)

export const actions = store => ({
    setField: (state, event) => {
        return{[event.target.name]: event.target.value};
    },
    postLogout: state =>{
        return {is_login: false};
        // console.log(is_login);
    }
    // postLogin: async state =>{
    //     await axios
    //         .get('http://0.0.0.0:5000/login', {
    //             params:{
    //                 'username': state.username,
    //                 'password': state.password
    //             }
    //         })
    //         .then(response =>{
    //             console.log("postLogin", response.data);
    //             console.log(response.data.token)
    //             if (response.data.hasOwnProperty("token")){
    //                 store.setState({
    //                     is_login: true,
    //                     token: response.data.token
    //                 });
    //                 // console.log(this.is_login)
    //             }
    //         })
    //         .catch(error =>{
    //             console.log("postLogin err", error);
    //         })
    // }
})

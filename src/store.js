import createStore from 'unistore'
import {Provider, connect} from 'unistore/react'
import axios from 'axios'

const initialStates = {
    api_key : "",
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
    },
    postLogin: async state =>{
        const data = {username: state.username, password: state.password};
        await axios
            .post('https://cobacoba.free.beeceptor.com/login', data)
            .then(response =>{
                console.log("postLogin", response.data);
                if (response.data.hasOwnProperty("api_key")){
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        full_name : response.data.full_name,
                        email: response.data.email
                    });
                    // console.log(this.is_login)
                }
            })
            .catch(error =>{
                console.log("postLogin err", error);
            })
    }
})

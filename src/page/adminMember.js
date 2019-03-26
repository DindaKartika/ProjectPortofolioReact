import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import ListMember from '../component/adminMemberLoop'
import SidebarAdmin from "../component/sidebarAdmin";

const base_url = 'https://bukuku.site/buku?kategori=';


class AdminMember extends Component {
    constructor(props){
        super(props);
        this.state = {
            Members: [],
            selectedPage: '1'
            };
            this.handleSelected = this.handleSelected.bind(this);
        }

        componentDidMount = () =>{
            const self = this;
            console.log(this.state.selectedPage)
            const tokens = localStorage.getItem('token')
            axios
            .get('https://bukuku.site/admin/member', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
                }
            })
            .then(function(response){
                self.setState({Members: response.data});
                console.log('data', response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }

        componentWillUpdate = () =>{
            const self = this;
            console.log(this.state.selectedPage)
            const tokens = localStorage.getItem('token')
            axios
            .get('https://bukuku.site/admin/member', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
                }
            })
            .then(function(response){
                self.setState({Members: response.data});
                console.log('data', response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }


        handleSelected(selectedPage) {
            console.log("selected", selectedPage);
            this.setState({ selectedPage: selectedPage });
          }

    render() {
        const {Members} = this.state;
        

        return (
        <div>
            <section class="isi-tab-admin">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 col-sm-4" style={{margin:'0'}}>
                    <SidebarAdmin tab = {this.props.location.pathname.slice(7)}/>
                </div>
                <div class="col-md-10 col-sm-8">
                    {Members.map((item, key) => {
                        return <ListMember key ={key} id={item.id_member} nama_depan={item.nama_depan} nama_belakang={item.nama_belakang} username={item.username} email={item.email} status={item.status}/>;
                    })}
                    <div class="page">
                        <span>Page</span>
                        <PaginationComponent
                        totalItems={Members.length}
                        pageSize={10}
                        onSelect={this.handleSelected}
                        maxPaginationNumbers={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
        );
    }
}

export default AdminMember;

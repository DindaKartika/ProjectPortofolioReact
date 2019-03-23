import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiPenerbit extends Component {
  render() {
      return (
          <div className="row">
            <div className="col-12 d-md-none d-block isi-explore" id="isi-penerbit">
            <div className="row">
                <div className="col-6">
                    <span><Link to="/publisher/gramedia">Gramedia Pustaka Utama</Link></span>
                    <br/>
                    <span><Link to="/publisher/bentang pustaka">Bentang Pustaka</Link></span>
                    <br/>
                    <span><Link to="/publisher/ae publishing">AE Publishing</Link></span>
                </div>
                <div className="col-6">
                    <span><Link to="/publishe/mizanr">Mizan</Link></span>
                    <br/>
                    <span><Link to="/publisher/edwrite publisher">EdWrite Publisher</Link></span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default IsiPenerbit;
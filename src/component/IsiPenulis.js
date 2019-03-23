import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiPenulis extends Component {
  render() {
      return (
          <div className="row">
            <div className="col-12 d-md-none d-block isi-explore" id="isi-penulis">
            <div className="row">
                <div className="col-6">
                    <span><Link to="/penulis/aleazalea">AleaZalea</Link></span>
                    <br/>
                    <span><Link to="/penulis/ilana tan">Ilana Tan</Link></span>
                    <br/>
                    <span><Link to="/penulis/dahlan iskan">Dahlan Iskan</Link></span>
                </div>
                <div className="col-6">
                    <span><Link to="/penulis/wulan fadi">Wulan Fadi</Link></span>
                    <br/>
                    <span><Link to="/penulis/dee lestari">Dee Lestari</Link></span>
                    <br/>
                    <span><Link to="/penulis/crowdstoria">Crowdstoria</Link></span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default IsiPenulis;
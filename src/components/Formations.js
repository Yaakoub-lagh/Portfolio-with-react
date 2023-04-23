import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formations extends Component {
  render() {
    return (
      <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
        <div className="shadow p-3 mb-3 bg-white rounded card"  >
          <div className="card-body" style={{backgroundColor :"#210090" ,color:"white"}}>
            <div className="card-title h5" >
              Ingenieurie, Informatique (MIAGE)
            </div>
            <div className="mb-2  card-subtitle h6">
              Ecole Maroccaine des sciences de l'ingenieur Marrakech
            </div>
            <p className="card-text">
              2020 - 2024
            </p>
          </div>
        </div>
        <div className="shadow p-3 mb-3 bg-white rounded card"  >
        <div className="card-body" style={{backgroundColor :"#210090" ,color:"white"}}>
            <div className="card-title h5" >
              Class prepa ( PCSI,PSI)
            </div>
            <div className="mb-2  card-subtitle h6">
              Koutoubia prepa
            </div>
            <p className="card-text">
              2015 - 2018
            </p>
          </div>
          </div>
        
        <div className="shadow p-3 mb-3 bg-white rounded card" >
          <div className="card-body" style={{backgroundColor :"#210090" ,color:"white"}}>
            <div className="card-title h5">
              Baccalaureat
            </div>
            <div className="mb-2 card-subtitle h6">
              Lycee Ariha Marrakech
            </div>
            <p className="card-text">
              2013 - 2014
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Formations;

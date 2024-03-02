import React from 'react';
import fashion from '../fashion.webp';
import { Link } from 'react-router-dom';
import './Hero.css';  // Import the CSS file

const Home = () => {
  return (
    <div className="card card-color">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p className="card-title">Discover and <br />Find Your Own <br />Fashion!</p>
            <p className="card-text">Explore our curated collection of stylish <br />clothing and accessories tailored to your<br /> unique taste.</p>
            <Link to='/Shop'>
              <button className="btn">Explore Now</button>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={fashion} alt="Fashion" className="img-fluid smaller-image cut-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

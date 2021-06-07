import React from 'react';

import './App.css';
import ProductData from './ProductData';



function App() {
  // const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  // const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes : '0' + new Date().getMinutes();
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Topbar">
          <img src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="Amazon" />
        </nav>
      </header>
      
      <div className ="MainContainer">
        <div className ="ProductPreview">
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>

          {/* <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div> */}

          <div className="HeartBeatSection">
          <i className="fas fa-heartbeat"></i>
            <p>78</p>
          </div>

        </div>
        
        <div className ="ProductData">
          <h1 className="ProductTitle">{ProductData.title}</h1>
          <p className="ProductDescription">{ProductData.description}</p>

          <h3 className={"SectionHeadings"}>Select colour</h3>
          <div>
            <img className="ProductImage SelectedProductImage" src="https://imgur.com/iOeUBV7.png"alt="Black Coloured Watch" />
            <img className="ProductImage" src="https://imgur.com/PTgQlim.png"alt="Red Coloured Watch" />
            <img className="ProductImage" src="https://imgur.com/Mplj1YR.png"alt="Blue Coloured Watch" />
            <img className="ProductImage" src="https://imgur.com/xSIK4M8.png"alt="Purple Coloured Watch" />
          </div>

          <h3 className="SectionHeadings">Features</h3>
          <div>
            <button className="FeaturesItem SelectedFeaturesItem">Rate</button>
            <button className="FeaturesItem">Heart Rate</button>
          </div>

          <button className="PrimaryButton">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;

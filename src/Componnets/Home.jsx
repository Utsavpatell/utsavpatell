import React from "react";

import hero from "./data/hero.json";


const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
            <h1>
            Welcome to My Profile, My Name is UTSAV PATEL. I’m a Computer Engineering Student With a Passion For Technology And Innovation 
            </h1>

          <a href='' className="btn btn-outline-warning">Download Resume</a>

        </div>
        <div className="right">
          <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero"/>
          </div>
        </div>
      </div>   
    </>
  )
}


export default Home
  
import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2 style={{color:'#f23535',  textShadow: '1px 1px 2.5px rgba(0, 0, 0, 0.8)',}}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p style={{   color: '#000000',textShadow: '1px 1px 2.5px rgba(0, 0, 0, 0.8)' }}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
  href="https://wa.me/7906767266?text=Hello! I would like to learn more about your services."
  className="btn btn-custom btn-lg page-scroll"
  target="_blank"
  rel="noopener noreferrer"
>
  Publish Now
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

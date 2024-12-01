import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          
          {/* <a className="navbar-brand page-scroll" href="#">
      
        Research Publication
      </a>{" "} */}
     <a href="#">
  <img
    src="img/icon.jpg"
    alt="Logo"
    style={{ width: "75px", height: "75px", borderRadius: "50%" }}
  />
</a>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" className="page-scroll">
                Home
              </a>
            </li>
           
            <li>
              <a href="#about" className="">
                About
              </a>
            </li>
            
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
           
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Clients
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#features" className="page-scroll">
               Features
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
           
            <a
  href="https://wa.me/7906767266?text=Hello! I would like to get a quote for your services."
  className="btn btn-custom btn-lg page-scroll"
  target="_blank"
  rel="noopener noreferrer"
>
  Quote Now
</a>

          

          </ul>
        </div>
      </div>
    </nav>
  );
};

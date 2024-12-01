import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
  Explore moments of academic excellence, innovation, and collaboration captured through our journey. From successful publications to impactful events, our gallery showcases the milestones that define Research Publication House.
</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};



// Gallery Photos Data

  //  {
  //     "title": "Book Publication",
  //     "largeImage": "img/service/4.jpg",
  //     "smallImage": "img/service/4.jpg"
  //   },
  //   {
  //     "title": "Writing Services",
  //     "largeImage": "img/service/5.jpg",
  //     "smallImage": "img/service/5.jpg"
  //   },
  //   {
  //     "title": "Academic Projects",
  //     "largeImage": "img/service/6.jpg",
  //     "smallImage": "img/service/6.jpg"
  //   },
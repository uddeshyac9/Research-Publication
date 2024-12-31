import React from "react";

export const Gallery = (props) => {
  // Helper function to check if the file is a video
  const isVideo = (file) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => file.endsWith(ext));
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore moments of academic excellence, innovation, and collaboration
            captured through our journey. From successful publications to
            impactful events, our gallery showcases the milestones that define
            Research Publication House.
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
                    {isVideo(d.largeImage) ? (
                      <video controls width="100%" autoPlay>
                        <source src={d.largeImage} type="video/mp4"  />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={d.largeImage}
                        alt={d.title}
                        className="img-responsive"
                      />
                    )}
                    <h4>{d.title}</h4>
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
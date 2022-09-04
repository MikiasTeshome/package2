import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

// Slider Image
import profileImg00 from "../../../../images/avatar/1.jpg";
import profileImg01 from "../../../../images/avatar/2.jpg";

/*  */

const SideBarSlider = () => {
  const [asd, setAsd] = useState();
  const renderArrows = () => {
    return (
      <div className="testimonial-one-navigation owl-clienr-btn pull-left">
        <span id="next-slide" className="prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-chevron-left" />
        </span>
        <span id="prev-slide" className="next" onClick={() => asd.slickNext()}>
          <i className="fa fa-chevron-right" />
        </span>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="card-body">
      <div
        className="card-header border-0 px-0 d-sm-flex d-block"
        style={{
          display: "flex !important",
          marginTop: "-30px",
        }}
      >
        <div className="">
          <h3 className="newest card-title mb-1 text-white fs-28 font-w600 justify-content-start">
            Newest
          </h3>
        </div>
        {renderArrows()}
      </div>
      <Slider {...settings} ref={(c) => setAsd(c)}>
        <div className="items">
          <div className="text-white">
            <div className="media align-items-center mb-3">
              <img
                className="mr-3 img-fluid rounded-circle"
                width={50}
                src={profileImg00}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">James Kowalski</h4>
                <small className="mb-0 text-light">Head Marketing</small>
              </div>
            </div>
            <p className="mb-3">
              This was not just great cooking but exceptional cooking using only
              the best ingredients.
            </p>
            <p className="mb-3">
              Fast, professional and friendly service, we ordered the six course
              tasting menu and every dish was spectacular
            </p>
            <ul className="list-inline newest-tag">
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Excelent
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Good Services
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Recomended
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Satisfying
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="items">
          <div className="text-white">
            <div className="media align-items-center mb-3">
              <img
                className="mr-3 img-fluid rounded-circle"
                width={50}
                src={profileImg01}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">James Kowalski</h4>
                <small className="mb-0 text-light">Head Marketing</small>
              </div>
            </div>
            <p className="mb-3">
              This was not just great cooking but exceptional cooking using only
              the best ingredients.
            </p>
            <p className="mb-3">
              Fast, professional and friendly service, we ordered the six course
              tasting menu and every dish was spectacular
            </p>
            <ul className="list-inline newest-tag">
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Excelent
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Good Services
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Recomended
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="badge badge-rounded badge-secondary mb-1 mr-1"
                >
                  Satisfying
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SideBarSlider;

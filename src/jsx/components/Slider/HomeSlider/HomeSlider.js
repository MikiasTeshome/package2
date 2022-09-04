import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

// Slider Image
import pizzaImg from "../../../../images/dish/pic2.jpg";
import juiceImg from "../../../../images/dish/pic3.jpg";
import burgerImg from "../../../../images/dish/pic4.jpg";

import profileImg00 from "../../../../images/avatar/1.jpg";
import profileImg01 from "../../../../images/avatar/2.jpg";
import profileImg02 from "../../../../images/avatar/3.jpg";
import profileImg03 from "../../../../images/avatar/4.jpg";
import profileImg05 from "../../../../images/avatar/5.jpg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div class="owl-next" onClick={onClick}>
      <i class="fa fa-caret-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div class="owl-prev" onClick={onClick} style={{ zIndex: "1" }}>
      <i class="fa fa-caret-left"></i>
    </div>
  );
}

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={burgerImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Tuna soup spinach with himalaya salt
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  BURGER
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            A very fine addition to the not over plentiful supply of good
            restaurants in this part of west London.
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg00}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Roberto Jr.</h4>
                <small className="mb-0 text-light">Head Marketing</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={pizzaImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Chicken curry special with cucumber
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  PIZZA
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            Fast, professional and friendly service, we ordered the six course
            tasting menu and every dish was spectacular
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg01}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Jubaedah</h4>
                <small className="mb-0 text-light">Food Vlogger</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={juiceImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Tuna soup spinach with himalaya salt
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  JUICE
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            A very fine addition to the not over plentiful supply of good
            restaurants in this part of west London.
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg02}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Steve Henry</h4>
                <small className="mb-0 text-light">Internship Students</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">3.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={burgerImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Meidum Spicy Spagethi Italiano
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  BURGER
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            A very fine addition to the not over plentiful supply of good
            restaurants in this part of west London.
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg03}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Willy Wonca</h4>
                <small className="mb-0 text-light">Sales Marketing</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={burgerImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Tuna soup spinach with himalaya salt
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  PIZZA
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            A very fine addition to the not over plentiful supply of good
            restaurants in this part of west London.
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg05}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Roberto Jr.</h4>
                <small className="mb-0 text-light">Head Marketing</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={burgerImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Tuna soup spinach with himalaya salt
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  PIZZA
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            A very fine addition to the not over plentiful supply of good
            restaurants in this part of west London.
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg05}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Roberto Jr.</h4>
                <small className="mb-0 text-light">Head Marketing</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="bootstrap-media card p-4">
          <div className="media mb-4 align-items-center">
            <Link to="/ecom-product-detail">
              <img
                className="mr-3 img-fluid rounded-xl"
                width={94}
                src={burgerImg}
                alt="DexignZone"
              />
            </Link>
            <div className="media-body">
              <h5 className="mt-0 mb-3">
                <Link className="text-black" to="/ecom-product-detail">
                  Tuna soup spinach with himalaya salt
                </Link>
              </h5>
              <small className="mb-0">
                <Link className="text-primary" to=";">
                  PIZZA
                </Link>
              </small>
            </div>
          </div>
          <p className="fs-18 text-black mb-4">
            A very fine addition to the not over plentiful supply of good
            restaurants in this part of west London.
          </p>
          <div className="reviewer-box">
            <div className="media align-items-center">
              <img
                className="mr-3 img-fluid rounded"
                width={55}
                src={profileImg05}
                alt="DexignZone"
              />
              <div className="media-body">
                <h4 className="mt-0 mb-1 text-white">Roberto Jr.</h4>
                <small className="mb-0 text-light">Head Marketing</small>
              </div>
              <div className="star-review">
                <i className="fa fa-star text-orange" />
                <span className="ml-2">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HomeSlider;

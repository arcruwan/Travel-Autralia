import img from "../../../Assets/images/2.jpg";
import about1 from "../../../Assets/images/about-1.jpg";
import about2 from "../../../Assets/images/about-2.jpg";
import about3 from "../../../Assets/images/about-3.jpg";
import about4 from "../../../Assets/images/about-4.jpg";
import wall2 from "../../../Assets/images/wallpaper2.jpg";
import wall from "../../../Assets/images/1.jpg";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import AOS from "aos";

import { Zoom, Flip, Slide } from "react-reveal";
import Jump from "react-reveal/Jump";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Menu from "./menu";
import "aos/dist/aos.css";
import { Search } from "../Search/search";

export function Home() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Change the opacity value to adjust darkness (0 to 1)
  };

  const contentStyle = {
    zIndex: 1, // Ensure content is above the overlay
    color: "white",
    fontSize: "44px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <Zoom top cascade>
        <div style={contentStyle}>Add your content here</div>
      </Zoom>
    </div>
  );
}

export const OurServices = () => {
  //   const [inputVal, setinputVal] = useState(0);
  //   const clickme = () => {
  //     setinputVal(inputVal + 1);
  //   };

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <Search />
            </div>
            <div class="col-lg-6">
              <div class="row g-3">
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn firstImg"
                    data-wow-delay="0.1s"
                    src={about1}
                  />
                </div>
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={about2}
                  />
                </div>
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={about3}
                  />
                </div>
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={about4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  // Get the current items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className=" bg-light shadow-sm">
      <br />
      <div className="container ">
        <nav className="navbar navbar-light ">
          <span className="navbar-brand mb-0 m-auto h1 text-center">
            Recommended for you
          </span>
        </nav>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("breakfast")}
            >
              Breackfast
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("lunch")}
            >
              Lunch
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("evening")}
            >
              Evening
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("dinner")}
            >
              Dinner
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>
        </ul>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            {currentItems.map((elem) => {
              const { id, name, image, description, price } = elem;

              return (
                <Jump>
                  <div class="col-lg-3  " data-wow-delay="0.1s" key={id}>
                    <div
                      class="room-item shadow  overflow-hidden"
                      style={{ backgroundColor: "white" }}
                    >
                      <div class="position-relative">
                        <img class="img-fluid" src={wall} alt="" />
                        <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                          $100/Night
                        </small>
                      </div>
                      <div class="p-4 mt-2">
                        <div class="d-flex justify-content-between mb-3">
                          <h5 class="mb-0">{name} </h5>
                          <div class="ps-2">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                          </div>
                        </div>
                        <div class="d-flex mb-3">
                          <small class="border-end me-3 pe-3">
                            <i class="fa fa-bed text-primary me-2"></i>3 Bed
                          </small>
                          <small class="border-end me-3 pe-3">
                            <i class="fa fa-bath text-primary me-2"></i>2 Bath
                          </small>
                          <small>
                            <i class="fa fa-wifi text-primary me-2"></i>Wifi
                          </small>
                        </div>
                        <p class="text-body mb-3">
                          Erat ipsum justo amet duo et elitr dolor, est duo duo
                          eos lorem sed diam stet diam sed stet lorem.
                        </p>
                        <div class="d-flex justify-content-between">
                          <a
                            class="btn btn-sm   py-2 px-4"
                            style={{ backgroundColor: "#FEA116" }}
                            href="/"
                          >
                            View
                          </a>
                          <a class="btn btn-sm btn-dark  py-2 px-4" href="/">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Jump>
              );
            })}
          </div>

          <div className="text-center">
            <button
              type="button"
              className="btn btn- mt-4"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn mt-4"
              onClick={handleNextPage}
              disabled={indexOfLastItem >= items.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Descovery = () => {
  return (
    <>
      <Zoom>
        <div class=" py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
          <div class="row g-0">
            <div class="col-md-6 bg-dark d-flex align-items-center">
              <div class="p-5">
                <h6 class="section-title text-start text-white text-uppercase mb-3">
                  Luxury Living
                </h6>
                <h1 class="text-white mb-4">
                  Discover A Brand Luxurious Hotel
                </h1>
                <p class="text-white mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a href="/" class="btn btn-primary py-md-3 px-md-5 me-3">
                  Our Rooms
                </a>
                <a href="/" class="btn btn-light py-md-3 px-md-5">
                  Book A Room
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="video">
                <img
                  class="img-fluid  w-100 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={wall2}
                />
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <br />
    </>
  );
};

export const Services = () => {
  return (
    <>
      {/* <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title text-center text-primary text-uppercase">
              Our Services
            </h6>
            <h1 class="mb-5">
              Explore Our{" "}
              <span class="text-primary text-uppercase">Services</span>
            </h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <a class="service-item " href="/">
                <div class="service-icon bg-transparent border rounded p-1">
                  <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i class="ion-logo-facebook fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 class="mb-3">Rooms & Appartment</h5>
                <p class="text-body mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <a class="service-item " href="/">
                <div class="service-icon bg-transparent border rounded p-1">
                  <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i class="ion-logo-linkedin fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 class="mb-3">Food & Restaurant</h5>
                <p class="text-body mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <a class="service-item " href="/">
                <div class="service-icon bg-transparent border rounded p-1">
                  <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i class="fa fa-spa fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 class="mb-3">Spa & Fitness</h5>
                <p class="text-body mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <a class="service-item " href="/">
                <div class="service-icon bg-transparent border rounded p-1">
                  <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i class="fa fa-swimmer fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 class="mb-3">Sports & Gaming</h5>
                <p class="text-body mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <a class="service-item " href="/">
                <div class="service-icon bg-transparent border rounded p-1">
                  <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i class="fa fa-glass-cheers fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 class="mb-3">Event & Party</h5>
                <p class="text-body mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </a>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <a class="service-item " href="/">
                <div class="service-icon bg-transparent border rounded p-1">
                  <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i class="fa fa-dumbbell fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 class="mb-3">GYM & Yoga</h5>
                <p class="text-body mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export function TopDestination() {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4"></div>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
                style={{ height: "450px" }}
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
                style={{ height: "450px" }}
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
                style={{ height: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const useScrollAnimation = () => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  };
  useScrollAnimation();
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <Slider {...settings}>
            <div>
              <div class="  " data-wow-delay="0.1s" data-aos="zoom-in">
                <a class="service-item " style={{ margin: "5px" }} href="/">
                  <div class="service-icon   p-1">
                    <div class="w-100 h-100  d-flex align-items-center justify-content-center">
                      <i class="ion-logo-facebook fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 class="" style={{ color: "black" }}>
                    Rooms & Appartment
                  </h5>
                  <p class="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
            <div>
              <div
                class=" wow fadeInUp"
                data-wow-delay="0.1s"
                data-aos="zoom-in"
              >
                <a class="service-item " style={{ margin: "5px" }} href="/">
                  <div class="service-icon bg-transparent border rounded p-1">
                    <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i class="ion-logo-facebook fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 class="mb-3" style={{ color: "black" }}>
                    Rooms & Appartment
                  </h5>
                  <p class="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
            <div>
              <div
                class=" wow fadeInUp"
                data-wow-delay="0.1s"
                data-aos="zoom-in"
              >
                <a class="service-item " style={{ margin: "5px" }} href="/">
                  <div class="service-icon bg-transparent border rounded p-1">
                    <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i class="ion-logo-facebook fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 class="mb-3" style={{ color: "black" }}>
                    Rooms & Appartment
                  </h5>
                  <p class="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
            <div>
              <div
                class=" wow fadeInUp"
                data-wow-delay="0.1s"
                data-aos="zoom-in"
              >
                <a class="service-item " style={{ margin: "5px" }} href="/">
                  <div class="service-icon bg-transparent border rounded p-1">
                    <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i class="ion-logo-facebook fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 class="mb-3" style={{ color: "black" }}>
                    Rooms & Appartment
                  </h5>
                  <p class="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
            <div>
              <div
                class=" wow fadeInUp"
                data-wow-delay="0.1s"
                data-aos="zoom-in"
              >
                <a class="service-item " style={{ margin: "5px" }} href="/">
                  <div class="service-icon bg-transparent border rounded p-1">
                    <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i class="ion-logo-facebook fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 class="mb-3" style={{ color: "black" }}>
                    Rooms & Appartment
                  </h5>
                  <p class="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
            <div>
              <div
                class=" wow fadeInUp"
                data-wow-delay="0.1s"
                data-aos="zoom-in"
              >
                <a class="service-item " style={{ margin: "5px" }} href="/">
                  <div class="service-icon bg-transparent border rounded p-1">
                    <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i class="ion-logo-facebook fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 class="mb-3" style={{ color: "black" }}>
                    Rooms & Appartment
                  </h5>
                  <p class="text-body mb-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

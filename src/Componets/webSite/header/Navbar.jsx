import "./navbar.css";
import React, { useState } from "react";
// import "../../../Assets/fonts/style.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let Link = [
    { name: "Home", link: "/" },
    { name: "Packages", link: "/" },
    { name: "Thing to do", link: "/" },
    { name: "about Us", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <>
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <div class="site-navbar-wrap">
        <div class="site-navbar-top">
          <div class="container py-3">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="d-flex mr-auto">
                  <a href="?" class="d-flex align-items-center mr-4">
                    <span class="icon-envelope mr-2"></span>
                    <span class="d-none d-md-inline-block">
                      info@domain.com
                    </span>
                  </a>
                  <a href="?" class="d-flex align-items-center mr-auto">
                    <span class="icon-phone mr-2"></span>
                    <span class="d-none d-md-inline-block">
                      +1 234 4567 8910
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-6 text-right">
                <div class="mr-auto">
                  <a href="?" class="p-2 pl-0">
                    <span class="ion-logo-twitter"></span>
                  </a>
                  <a href="?" class="p-2 pl-0">
                    <span class="ion-logo-facebook"></span>
                  </a>
                  <a href="?" class="p-2 pl-0">
                    <span class="ion-logo-linkedin"></span>
                  </a>
                  <a href="?" class="p-2 pl-0">
                    <span class="ion-logo-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-navbar site-navbar-target js-sticky-header">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-1">
                <h1 class="my-0 site-logo">
                  <a href="?">Brand</a>
                </h1>
              </div>
              <div class="col-10">
                <nav class="site-navigation text-right" role="navigation">
                  <div class="container">
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <span
                        class="ion-md-menu h3 "
                        style={{ color: "black" }}
                        onClick={handleMenuToggle}
                      ></span>
                    </div>
                    {isMenuOpen && (
                      <ul className="menu-items">
                        {Link.map((link, index) => (
                          <li key={index} className="menu-item">
                            <a href={link.link}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul
                      className={`site-menu main-menu js-clone-nav d-none d-lg-block hide-in-mobile ${
                        isMenuOpen ? "hide-in-mobile" : ""
                      }`}
                    >
                      {Link.map((link, index) => (
                        <li key={index} className="active">
                          <a href={link.link} className="nav-link">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

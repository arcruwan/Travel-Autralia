import "./FooterStyle.css";

function Footer() {
  return (
    <footer className="footer-04">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <a type="button" href="?">
              read more <span className="ion-ios-arrow-round-forward"></span>
            </a>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Categories</h2>
            <ul className="list-unstyled">
              <li>
                <a type="button" href="?" className="py-1 d-block">
                  Buy &amp; Sell
                </a>
              </li>
              <li>
                <a type="button" href="?" className="py-1 d-block">
                  Merchant
                </a>
              </li>
              <li>
                <a type="button" href="?" className="py-1 d-block">
                  Giving back
                </a>
              </li>
              <li>
                <a type="button" href="?" className="py-1 d-block">
                  Help &amp; Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Tag cloud</h2>
            <div className="tagcloud">
              <a type="button" href="?" className="tag-cloud-link">
                dish
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                menu
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                food
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                sweet
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                tasty
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                delicious
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                desserts
              </a>
              <a type="button" href="?" className="tag-cloud-link">
                drinks
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Subscribe</h2>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button
                  type="submit"
                  className="form-control submit rounded-right"
                >
                  <span className="sr-only">Submit</span>
                  <i className="ion-ios-send"></i>
                </button>
              </div>
            </form>
            <h2 className="footer-heading mt-5">Follow us</h2>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate">
                <a
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                  href="?"
                >
                  <span className="ion-logo-twitter"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  href="?"
                >
                  <span className="ion-logo-facebook"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  href="?"
                >
                  <span className="ion-logo-instagram"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  href="?"
                >
                  <span className="ion-logo-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100 mt-5 border-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <p className="mb-0">
                © {new Date().getFullYear()} Your Website Name. All rights
                reserved.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-right">
              <p className="mb-0 list-unstyled">
                <span className="mr-md-3">Click me</span>
                <span className="mr-md-3">Click me</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

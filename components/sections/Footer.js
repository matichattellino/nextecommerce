import React from 'react';

const Footer = () => (

  <footer className="pt-5">
    <div className="custom-container mb-5 pb-1 pt-1">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Commerce.js
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://commercejs.com/docs/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Documentation
              </a>
              <a
                href="https://commercejs.com/features"
                className="d-block font-color-medium"
                target="_blank"
              >
                Features
              </a>
            </div>
            <div>
              <a
                href="https://commercejs.com/company/about"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                About
              </a>
              <a
                href="http://slack.commercejs.com/"
                className="d-block font-color-medium"
                target="_blank"
              >
                Community
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/commercejs"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/commerce.js/"
                className="d-block font-color-medium"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://angel.co/company/chec"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Angel
              </a>
              <a
                href="https://www.linkedin.com/company/chec-chec-commerce-inc.-/"
                className="d-block font-color-medium"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
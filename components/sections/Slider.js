import React from 'react';
import { Carousel }  from "react-bootstrap";
import Link from 'next/link';

const Slider = () => {
    return ( 
      <div className="hero-section position-relative">
      <Carousel>
      <Carousel.Item>
          <div>
             <div
                className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
                  style={{
                    backgroundImage: 'url(/images/home-1.jpg)'
                   }}
                    >
                      <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                        The care you've always needed
                      </p>  
                      <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                        A range of products for you
                      </p>
                      <Link href="/">
                        <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                          Shop now
                        </a>
                    </Link>
                </div>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
             <div
                className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
                  style={{
                    backgroundImage: 'url(/images/home-2.jpg)'
                   }}
                    >
                      <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                        The care you've always needed
                      </p>  
                      <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                        A range of products for you
                      </p>
                      <Link href="/">
                        <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                          Shop now
                        </a>
                    </Link>
                </div>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
             <div
                className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
                  style={{
                    backgroundImage: 'url(/images/home-3.jpg)'
                   }}
                    >
                      <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                        The care you've always needed
                      </p>  
                      <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                        A range of products for you
                      </p>
                      <Link href="/">
                        <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                          Shop now
                        </a>
                    </Link>
                </div>
           </div>
      </Carousel.Item>
    </Carousel>
    </div>
    );
}
 
export default Slider;


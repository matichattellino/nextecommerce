import React, { useState, useEffect, createRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import CheckBox from '../../ui/checkBox/Ckeckbox';
import RadioBox from '../../ui/radiobox/RadioBox';
import { prices } from '../../utils/fixedPrices';

const Collections = ({ categories, products })  => {
    const sidebar = createRef();
    const page = createRef(); 
    const [ myFilters, setMyFilters ] = useState({
        filters: { category: [], price: []}
    });

  const handleFilters = (filters, filterBy) => {
      const newFilters = {...myFilters}
      newFilters.filters[filterBy] = filters
      setMyFilters(newFilters);
  }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 
    }, []);

    const handleScroll =  () => {
        const animate = () => {
          if (!page.current) {
            return;
          }
    
          const distance =
            page.current.getBoundingClientRect().bottom -
            window.innerHeight;
    
          if (distance < 0) {
            sidebar.current.style.transform = `translateY(${distance}px)`;
          } else {
            sidebar.current.style.transform = 'translateY(0px)';
          }
        };
    
        window.requestAnimationFrame(animate);
      }    

  return (
    <div className="py-5 my-5">
      <Head>
        <title>Collections</title>
      </Head>
      <div className="py-4">
        {/* Sidebar */}
        <div
          ref={sidebar}
          className="position-fixed left-0 right-0"
          style={{ top: '7.5rem' }}
        > 
          <div className="custom-container">
            <div className="row">
              <div className="col-2 d-none d-lg-block position-relative">
                  <p className="font-size-title font-weight-medium mb-3">
                    Categories
                  </p>  
                    <CheckBox
                        categories={categories}
                        handleFilters={filters => handleFilters(filters,"category")} 
                    />
                  <p className="font-size-title font-weight-medium mb-3">
                    Prices
                  </p>  
                    <RadioBox
                        prices={prices}
                        handleFilters={filters => handleFilters(filters, "price")} 
                    />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div ref={page} className="custom-container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-2">
                {JSON.stringify(myFilters)}
                {JSON.stringify(myFilters)}
                {JSON.stringify(myFilters)}

                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}

                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}

                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}

                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}
                 {JSON.stringify(myFilters)}

                  {JSON.stringify(myFilters)}
                   {JSON.stringify(myFilters)}
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default connect(state => state)(Collections);

import React, { useState, useEffect, createRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';

const Collections = ({ categories, products })  => {
    const sidebar = createRef();
    const page = createRef(); 

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

    const renderSidebar = () => {
        return (
            <>
            {categories.map(category => (
            <div key={category.id} className="custom-container">
              <div className="row">
                <div className="col-2 d-none d-lg-block position-relative">
                  <p className="font-size-title font-weight-medium mb-3">
                    {category.name}
                  </p>
                  <Link href={`/collection#${category.slug}`}>
                    <div className="mb-5">
                      <div className="d-flex">
                        <p className="mb-2 position-relative cursor-pointer">
                          Products
                          <span
                            className="position-absolute font-size-tiny text-right"
                            style={{ right: '-12px', top: '-4px' }}
                          >
                            {category.count}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </>
        )
    }

     /**
         * Filter products by category
     */
    const filterProductsByCat = (catSlug) => {    
        const cat = categories.find(category => category.slug === catSlug);
        if (!cat) {
          return [];
        }
        return products.filter(product => product.categories.find(productCategory => productCategory.id === cat.id));
    }

    /**
        * Render collections based on categories available in data
    */
   const renderCollection = () => {
    const reg = /(<([^>]+)>)/ig;

    return (  
      <div className="collection">
        {categories.map(category => (
                <div key={category.id}>
                <p className="font-size-title font-weight-medium mb-4" id={category.slug}>
                  {category.name}
                </p>
                <div className="row mb-5 collection-1">
                  {filterProductsByCat(category.slug).map(product => (
                    <div key={product.id} className="col-6 col-sm-4 col-md-3">
                      <Link href="/product/[permalink]" as={`/product/${product.product.permalink}`}>
                        <a className="mb-5 d-block font-color-black cursor-pointer">
                          <div
                            className="mb-3"
                            style={{
                              paddingBottom: '125%',
                              background: `url("${product.product.img}") center center/cover`
                            }}
                          />
                          <p className="font-size-subheader mb-2 font-weight-medium">
                            {product.product.name}
                          </p>
                          <p className="mb-2 font-color-medium">
                            {product.product.description.replace(reg, '')}
                          </p>
                          <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                             $ {product.product.price}
                        </p>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
            </div>
        ))}
      </div>
    )
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
          { renderSidebar() }
        </div>

        {/* Main Content */}
        <div ref={page} className="custom-container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-2">
              { renderCollection() }
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default connect(state => state)(Collections);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import Head from 'next/head';
import Root from '../../components/sections/Root';
import Footer from '../../components/sections/Footer';
import productsData from '../../components/sections/collections/products.data';
import CategoryList from '../../components/sections/products/categoryList';
import CarouselImages from '../../components/sections/productsAssets/CarouselImages';
import ProductDetail from '../../components/sections/products/ProductDetail'
import SuggestedProducts from '../../components/sections/productsAssets/SuggestedProducts';

const detailView = `<p>
  Slightly textured fabric with tonal geometric design and a bit of shine
</p>`;

const Product = ( { products, categories, product } ) => {
    const [ showShipping, setShowShipping ] = useState();
    const [ showDetails, setShowDetails ] = useState();

    const toggleShiping = () => {
        setShowShipping({ showShipping: !showShipping })
    }

    const toggleDetails = () => {
        setShowDetails({ showDetails: !showDetails})
    }

    return ( 
        <Root>
            <Head>
                <title> {product.product.name} | commerce</title>
            </Head>

            <div className="py-5 my-5">
        <div className="main-product-content">
          {/* Sidebar */}
          <div className="product-sidebar">
            <CategoryList
                className="product-left-aside__category-list"
                current={ product.categories[0] && product.categories[0].id }
            />
            {/* <CarouselImages /> */}
          </div>

          <div className="product-images">
            <div className="flex-grow-1">
                <img    
                  src="/images/product/1.png"
                  className="w-100 mb-3 carousel-main-images"
                />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="product-detail">
               <ProductDetail product={product} /> 
              <div
                onClick={toggleShiping}
                className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
              >
                Shipping and returns
                <img src="/icon/plus.svg" />
              </div>
              <Collapse isOpened={showShipping}>
                <div className="pb-4 font-color-medium">
                  Arrives in 5 to 7 days, returns accepted within 30
                  days. For more information, click here.
                </div>
              </Collapse>
              <div className="h-1 border-bottom border-color-black" />
              <div
                onClick={toggleDetails}
                className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
              >
                Details
                <img src="/icon/plus.svg" />
              </div>
              <Collapse isOpened={showDetails}>
                <div
                  className="pb-4 font-color-medium"
                  dangerouslySetInnerHTML={{
                    __html: detailView
                  }}
                />
              </Collapse>
              <div className="h-1 borderbottom border-color-black" />
            </div>

            </div>
        </div>
        {/* <SuggestedProducts /> */}
        <Footer />
        </Root>
     );
}

/**
 * Use getStaticPaths() to pre-render PDP (product display page) according to page path
 */
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on product
    const paths = productsData.map(product => ({
        params: {
          permalink: product.product.permalink,
        },
    }));
    
    // We'll pre-render only these paths at build time.
    return {
      paths,
      // { fallback: false } means other routes should 404.
      fallback: false,
    }
  }
  
 
  // This also gets called at build time, and fetches the product to view
  export async function getStaticProps({ params: { permalink } }) {
    // params contains the product `permalink`.
    // If the route is like /product/shampoo-conditioner, then params.permalink is shampoo-conditioner
    const product = productsData.find(product => product.product.permalink === permalink)
    // Pass product data to the page via props
    return {
      props: {
        product,
      },
    };
  }
 
export default connect(state => state)(Product);
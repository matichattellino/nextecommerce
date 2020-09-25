import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';

const ProductDetail = ( { products } ) => {
    return ( 
        <div>
        {/* Product Summary */}
        <p className="font-size-display3 font-family-secondary mt-2 mb-2">
          Lip Labial
        </p>
        <div className="mb-4 pb-3 font-size-subheader"><p>Una descripcion</p></div>

        {/* Product Variant */}
          <div className="d-none d-sm-block">
           {/*  <VariantSelector
              className="mb-3"
              variants={variants}
              onSelectOption={handleSelectOption}
              selectedOptions={selectedOptions}
            /> */}
          </div>

        {/* Add to Cart & Price */}
        <div className="d-flex py-4">
          <button
              className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1" type="button">
            <span className="flex-grow-1 mr-3 text-center">
              Add to cart
            </span>
            <span className="border-left border-color-white pl-3">
                $100
            </span>
          </button>
        </div>
      </div>
    );
}
 
export default connect(state => state)(ProductDetail);
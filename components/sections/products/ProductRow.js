import React, { Component } from 'react';
import ProductCard from './ProductCard';

const ProductRow = ({ products }) => {
    const reg = /(<([^>]+)>)/ig;
    return ( 
        <div className="row mb-5">
        {products.map((product) => (
          console.log(product)
        ))}
      </div>
     );
}
 
export default ProductRow;
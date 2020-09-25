import React from 'react';
import ProductCard from './ProductsCard';

const ProductRow = () => {
    return ( 
        <div className="row mb-5">
          <div className="col-6 col-sm-6 col-lg-3">
            <ProductCard
              
            />
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <ProductCard
              
            />
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <ProductCard
              
            />
          </div>
          <div className="col-6 col-sm-6 col-lg-3">
            <ProductCard
              
            />
          </div>
      </div>
     );
}
 
export default ProductRow;
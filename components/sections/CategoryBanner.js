import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const categories = [
    {
      "slug": "facial-products",
      "name": "Facial Products",
      "image": '/images/collection/1.png',
      "count":  3
    },
    {
      "slug": "hair-products",
      "name": "Hair Products",
      "image": '/images/collection/2.png',
      "count":  3
    },
    {
      "slug": "body-products",
      "name": "Body Products",
      "image": '/images/collection/3.png',
      "count":  3
    }
]
  

const CategoryBanner = () => {
    return (  
        <div className="bg-brand300 py-1 collection-banner">
        <div className="custom-container py-5">
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categories
          </p>
          <div className="row">
            {categories.map((item, index) => (
              <div
              key={`category-item-${index}`}
              className="col-12 col-md-4 collection-item mb-5"
            >
                <Link href="/">
                <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                <div>

                    <div
                      className="mb-4 w-100 collection-item-image"
                      style={{
                        background: `url("${item.image}") center center/cover`
                      }}
                    />
                    <p className="mb-2 font-size-heading text-center" key={item.id}>
                    {item.name}
                    </p>
                    <p className="text-center">{item.count} products</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}


export default CategoryBanner;
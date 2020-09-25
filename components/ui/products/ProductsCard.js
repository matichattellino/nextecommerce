import React from 'react';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <Link href="/">
      <a className="mb-5 d-block font-color-black cursor-pointer">
        <div
          className="mb-3"
          style={{
            paddingBottom: '125%',
            background: "url('/images/default-2.jpeg') center center/cover",
          }}
        />
        <p className="font-size-subheader mb-2 font-weight-medium">
            Product
        </p>
        <p className="mb-2 font-color-medium">Top for woman</p>
        <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
          $25
        </p>
      </a>
    </Link>
  );
}
export default ProductCard
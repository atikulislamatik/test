import React from 'react';

const Product = ({ product }) => {
  // console.log(product);
  return (
    <>

      <div className="single-product">
        <div className="img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>

    </>
  )
}

export default Product
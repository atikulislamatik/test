import React from 'react';
import Product from './Product';

const Products = ({ products, page }) => {

    const perpage = 6;
    const startIndex = (page - 1) * perpage;
    const selectedProducts = products.slice(startIndex, startIndex + perpage);

    return (
        <div>
            <div className="container">
                <div className="row">

                    {
                        selectedProducts.map((product, index) => {
                            return (
                                <>
                                    <div className="col-lg-4" key={product.id}>
                                        <Product product={product}  />
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
};

export default Products;
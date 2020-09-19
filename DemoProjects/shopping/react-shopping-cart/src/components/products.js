import React from "react";
import {string, arrayOf, number, shape} from "prop-types";
import {formatCurrency} from "../util";

const productShape = {
    _id: string,
    image: string,
    title:string,
    description: string,
    availableSizes: arrayOf(string) ,
    price: number
};

Products.propTypes = {
    products: arrayOf(shape(productShape))
}

export function Products({products}) {
    return (
        <>
            <ul className="products">
                {products.map( product => (
                    <li key={product._id}>
                        <div className="product">
                            <a href={"#" + product._id}>
                                <img src={product.image} alt={product.title} />
                                <p>
                                    {product.title}
                                </p>
                            </a>
                        </div>
                        <div className="product-price">
                            <div>{formatCurrency(product.price)}</div>
                            <button className="button primary">Add to cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

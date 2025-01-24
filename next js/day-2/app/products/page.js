import React from 'react'
import ProductCard from '../Components/ProductCard';

const Products = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return (
        <div>
            {
                data.map((el) => {
                    return <ProductCard title={el.title} key={el.id} id={el.id} />

                })

            }
        </div>
    )
}

export default Products

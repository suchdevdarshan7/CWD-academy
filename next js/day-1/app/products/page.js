

import React from 'react'

const Products = async () => {



    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return (
        <div>
            {
                data.map((el) => {
                    return <li key={el.id}>{el.title}</li>
                })
            }
        </div>
    )
}

export default Products

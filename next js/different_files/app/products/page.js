import React from 'react'

const ProductPage = async () => {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    return (
        <div>
            {data.map((el) => <li key={el.id}>{el.title}</li>)}
        </div>
    )
}

export default ProductPage

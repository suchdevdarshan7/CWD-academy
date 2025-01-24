
import React from 'react'

const ProductPage = async () => {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()

    console.log(data.products)

    if (data.products.length <= 0) {
        return <p>Products is empty</p>
    }
    return (
        <div>
            {
                data.products.map((el) => <li key={el.id}> {el.product}</li>)
            }

        </div>
    )
}

export default ProductPage

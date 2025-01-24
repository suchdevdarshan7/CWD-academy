import { notFound } from 'next/navigation'
import React from 'react'

const ProductCard = ({ params: { slug } }) => {

    if (slug > 10)
        notFound()

    return (
        <div>
            I am the slug {slug}
        </div>
    )
}

export default ProductCard

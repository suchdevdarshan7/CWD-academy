'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

const ProductPage = (props) => {

    const router = useRouter();

    const { id } = React.use(props.params)
    console.log(id)
    let data;
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json()).then((value) => {
        data = value;
    })
    return (
        <div>
            <h1>{data?.title}</h1>
            <img src={data?.image} alt="" />
        </div>
    )
}

export default ProductPage

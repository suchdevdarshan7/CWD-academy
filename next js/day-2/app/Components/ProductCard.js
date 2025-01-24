'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductCard = ({ title, id }) => {
    const router = useRouter();
    return (
        <div>
            <li onClick={() => router.push(`/products/${id}`)}>{title}</li>
        </div>
    )
}

export default ProductCard

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link href={'/products'}>Products</Link>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default Navbar



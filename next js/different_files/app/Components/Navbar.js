import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/products'}>Go to products Page</Link></li>
                <li><Link href={'/users'}>Go to User page</Link></li>
            </ul>
        </div>
    )
}

export default Navbar

import React from 'react'
import './admin.css'
import Link from 'next/link'

const AdminNavbar = () => {
    return (
        <nav>
            <h1>Welcome</h1>
            <ul>
                <li><Link href="/admin/customers">Customers</Link></li>
                <li><Link href="/admin/sellers">Sellers</Link></li>
                <li><Link href="/admin/stats">Statitics</Link></li>
            </ul>
        </nav>
    )
}

export default AdminNavbar

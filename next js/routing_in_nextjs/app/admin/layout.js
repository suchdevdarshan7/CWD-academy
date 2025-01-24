import React from 'react'
import AdminNavbar from './Navbar'

const AdminLayout = ({ children }) => {
    return (
        <main className='flex-container'>
            <aside>
                <AdminNavbar />
            </aside>
            <article>
                {children}
            </article>
        </main>
    )
}

export default AdminLayout

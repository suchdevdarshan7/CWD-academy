'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



const AboutPage = () => {
    const router = useRouter();
    const [data, setData] = useState({ username: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault();

        if (data.password === '12345' && data.username === "admin") {
            router.push('/admin')
        }
        else {
            alert("Admin password or username is false")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" onChange={(e) => setData({ ...data, username: e.target.value })} />
                </div>
                <div>
                    <input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
                </div>
                <button type="submit">Log In as admin</button>
            </form>
        </div>
    )
}

export default AboutPage

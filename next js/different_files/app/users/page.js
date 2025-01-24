import React from 'react'

const UsersPage = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return (
        <div>
            {data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
    )
}

export default UsersPage

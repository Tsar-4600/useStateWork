import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);

    if (!user) return <p>Юзера нет или введите get запрос в url строке...</p>;

    return (


        <div>
            <h2>Zadanie3</h2>
        
            <p>{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
        </div>


    );
}

export default UserProfile;
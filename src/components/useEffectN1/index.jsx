import React, {useState, useEffect} from 'react';
import './styles.css';
function Zadanie1() {
    const[posts, setPosts] = useState([]);
    useEffect(
        () => { fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => setPosts(data));

        }, []
    );
    return (
        <div>
            <h2>
                Zadanie 1
            </h2>
            <ol>
                {
                    posts.map(post => (
                        <li className = "list" key={post.id}>{post.title}</li>
                    ))
                }
            </ol>
        </div>
     
    );
}

export default Zadanie1;
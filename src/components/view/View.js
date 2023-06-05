import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./View.css"

const View = () => {
    const id = useParams().id;
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const uri =`https://mycrud-server.onrender.com/users/${id}`
        fetch(uri)
        .then(res=> res.json())
        .then(data => setUsers(data))
    })
    return (
        <div className='view'>
            <Link to="/"><button>Go to Home</button></Link>
            <h1>Hello {users.name}</h1>
           <p>{users.email}</p>
        </div>
    );
};

export default View;
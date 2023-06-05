import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Update.css"

const Update = () => {

    const id = useParams().id;
    const [user,setUser] = useState({})
    useEffect(()=>{
        const uri=`https://mycrud-server.onrender.com/users/${id}`
        fetch(uri)
        .then(res=> res.json())
        .then(data=> setUser(data));
    },[])
    // nameUpdate
    const nameUpdate = e =>{
    const name = e.target.value;
    const updatedName = {name:name ,email: user.email}
    setUser(updatedName);
    }

    //emailUpdate
    const emailUpdate = e=>{
    const email = e.target.value;
    const updateEmail = {name: user.name, email: email}
    setUser(updateEmail)
    }


    // update
    const updateHandaler =(e)=>{
        e.preventDefault();

        const uri = `https://mycrud-server.onrender.com/users/${id}`
        fetch(uri,{
            method:"put",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.acknowledged)
            {
                alert("Data Updated Seccessful")
            }
        })
    }
    return (
        <div className='update' style={{marginTop:"30px"}}>
            <Link to={"/"}>
                <button>Go to Home</button>
            </Link>
            <h1>Update profile Info</h1>
            <form>
                <input onChange={nameUpdate} type="text" value={user.name || " "}/>
                <input onChange={emailUpdate} type="email" value={user.email || " "}/>
                <input onClick={updateHandaler} type="submit" value="update"/>
            </form>
        </div>
    );
};

export default Update;
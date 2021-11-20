import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewuser = () => {
    const [view,setView]=useState({
        name:"",
        username:"",
        email:""
    })
    const { id } = useParams()
    const vieww = async () =>{
       const result= await axios.get(`http://localhost:4000/Users/${id}`);
        setView(result.data)
      console.log(typeof(view))
      
    }
    useEffect(()=>{
        vieww()
    },[])
    return (
        <div>
            <h1>User : {id}</h1>
          <ul style={{listStyle:"none",marginTop:"20px"}}>
              <h3>{view.name}</h3>
              <h3>{view.username}</h3>
              <h3>{view.email}</h3>
          </ul>
        </div>
    )
}

export default Viewuser

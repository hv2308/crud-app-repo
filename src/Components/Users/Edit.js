import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios'

const Edit = () => {

    const[editUser,setEditUser]=useState({name:"",username:"",email:""})
    const { id } =useParams();
    //filling data
    const fillData = async () => {
        let result=await axios.get(`http://localhost:4000/Users/${id}`)
        setEditUser(result.data)
        console.log(editUser)
    } 
    useEffect(()=>{
        fillData()
    },[])
    //eitUser
    const history = useHistory();
    const submit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/Users/${id}`,editUser)
        history.push('/')
    }

    return (
        <div>
                 <Container>
                <h1 className="mt-5 p-2">Add User</h1>
                <Form className="mt-5 p-4" onSubmit={(e)=>submit(e)}>
                    <Form.Control size="lg" type="text" placeholder="Name" value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} required />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="UserName" value={editUser.username} onChange={(e) => setEditUser({ ...editUser, username: e.target.value })} required />
                    <br />
                    <Form.Control size="lg" type="email" placeholder="Email" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} required />
                    <br />
                    <Button style={{ width: "100%", marginTop: "20px" }} type="submit">Update User</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Edit

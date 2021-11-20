import axios from 'axios';
import React, {useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    const [newUser, setNewUser] = useState({ name: "", username: "", email: "" });
   
   const history=useHistory(); 
   const submit =async (e)=>{
       e.preventDefault()
    await axios.post("http://localhost:4000/Users",newUser)
    history.push("/");
   }
    return (

        <div>

            <Container>
                <h1 className="mt-5 p-2">Add User</h1>
                <Form className="mt-5 p-4" onSubmit={(e)=>submit(e)}>
                    <Form.Control size="lg" type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="UserName" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} required />
                    <br />
                    <Form.Control size="lg" type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
                    <br />
                    <Button style={{ width: "100%", marginTop: "20px" }} type="submit">Add User</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddUser

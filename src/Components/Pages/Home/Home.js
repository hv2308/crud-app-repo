import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    //setting Users
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:4000/Users');
        setUsers(result.data);
   
    }
    useEffect(() => {
        loadUsers();
    }, [])
    const [users, setUsers] = useState([]);
    
    //deleting User

    const deleteUser = async (e) =>{
       await axios.delete(`http://localhost:4000/Users/${e}`)
       loadUsers();
     
    }

    return (
        <div>
            <Container>
                <Table striped bordered hover variant="dark" className="mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="me-2" to={`/users/view/${user.id}`}><Button >View</Button></Link>
                                        <Link className="me-2" to={`/users/edit/${user.id}`}><Button variant="light">Edit</Button></Link>
                                        <Link className="me-2" to="/#"><Button variant="danger" onClick={()=>{deleteUser(user.id)}}>Delete</Button></Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Home

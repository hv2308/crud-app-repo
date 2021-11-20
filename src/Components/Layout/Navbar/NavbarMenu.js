import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const NavbarMenu = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" style={{ padding: "10px 0 10px 0" }}>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="navLinks" to="/" activeClassName="active" exact>Home</NavLink>
                            <NavLink className="navLinks" to="/about" activeClassName="active">About</NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/users/add">  <Button variant="warning">Add User</Button></Link>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarMenu

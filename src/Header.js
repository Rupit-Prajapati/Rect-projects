import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Header() {
   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="/">Navbar</Navbar.Brand>
               <Nav className="mr-auto nav_bar_wrapper">
                  <Nav.Link as={Link} to='/Temp_control'>Temperature Control</Nav.Link><br />
                  <Nav.Link as={Link} to='/filter'>Filter Search</Nav.Link>
                  <Nav.Link as={Link} to='/form'>Basic Form</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </>
   )
}

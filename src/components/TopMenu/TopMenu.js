import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './TopMenu.scss'; 
import {ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Cart from '../Cart/Cart';
function TopMenu() {

  return (
    <Navbar bg="dark" variant="dark" className="top-menu" >
        <Container>
            <BrandNav />
            {/* <MenuNav /> */}
            <Cart />
        </Container>
    </Navbar>
  );
}

export default TopMenu;

function BrandNav() {
    return <Navbar.Brand>
        <Logo className="logo"/>
        <h2>La casa de los helados</h2>
    </Navbar.Brand>;
}

// function MenuNav() {
//     return (
//         <Nav className="mr-auto">
//             <Nav.Link href="#">Aperitivos</Nav.Link>
//             <Nav.Link href="#">Helados</Nav.Link>            
//         </Nav>
//     )    
// }
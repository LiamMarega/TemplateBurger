import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavBar.css';
function NavBar({ handleOpen }) {
  const [navBarBackground, setNavBarBackgorund] = useState(false);

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 10) {
        setNavBarBackgorund(true);
      }
    } else if (window.scrollY >= 790) {
      setNavBarBackgorund(true);
    } else {
      setNavBarBackgorund(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [changeBackground]);

  return (
    <>
      <Navbar fixed='top'>
        <Container fluid className={navBarBackground ? 'navbar active' : 'navbar false'}>
          
            <Navbar.Brand href='/'>MG</Navbar.Brand>
        

          <Nav className='me-auto'>
            <Link activeClass='active' to='home' smooth={true} duration={1000} >
              <Nav>Inicio</Nav>
            </Link>
           
              <Nav.Link href='/about'>Sobre Nosotros</Nav.Link>
           
            <Link activeClass='active' to='Menu' smooth={true} duration={1000} >
              <Nav>Menu</Nav>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

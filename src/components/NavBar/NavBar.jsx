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
          <Link activeClass='active' to='home' smooth={true} duration={1000} delay={100}>
            <Navbar.Brand>F&D</Navbar.Brand>
          </Link>

          <Nav className='me-auto'>
            <Link activeClass='active' to='home' smooth={true} duration={1000} delay={100}>
              <Nav>Inicio</Nav>
            </Link>
            <Link activeClass='active' to='about' smooth={true} duration={1000} delay={100}>
              <Nav>Sobre Nosotros</Nav>
            </Link>
            <Link activeClass='active' to='photos' smooth={true} duration={1000} delay={100}>
              <Nav>Fotos</Nav>
            </Link>

            <Nav onClick={handleOpen}>Menu</Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

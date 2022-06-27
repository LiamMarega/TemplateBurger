import React from 'react';
import { Container, Row, Col, Image, Button, Stack } from 'react-bootstrap';
import { imgBurger, imgBurgerBlack, imgBurger3, imgBurgerBreak } from '../../../public/images/index.jsx';
import { GiHamburger } from 'react-icons/gi';
import { FaIceCream } from 'react-icons/fa';

import './Menu.css';
function Menu() {
  return (
    <Container id='Menu' fluid className='LandingPage__Container_Row_Tres'>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <h2 style={{ width: '100%', fontWeight: '800', fontSize: '45px' }}>Trump Menu</h2>
            <br />
            <br />
            <p>Trump menu with french fries and BB sauce</p>
            <br />

            <br />
            <Col xs={5} className='Menu_Col_Price'>
              <Button target='_blank' href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!'  variant='warning'>Buy</Button>
            </Col>
            <Col xs={5} className='Menu_Col_Price'>
              <h5> $850 / 465g</h5>
            </Col>
          </Col>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <Image fluid className='FondoLogoImagen' src={imgBurger}></Image>
          </Col>
        </Row>
        <Row>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <Image fluid className='FondoLogoImagen' id='BurgerBlack' src={imgBurgerBlack}></Image>
          </Col>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <h2 style={{ width: '100%', fontWeight: '800', fontSize: '45px' }}>Trump Menu</h2>
            <br />
            <br />
            <p>Trump menu with french fries and BB sauce</p>
            <br />

            <br />
            <Col xs={5} className='Menu_Col_Price'>
              <Button target='_blank' href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!' variant='warning'>Buy</Button>
            </Col>
            <Col xs={5} className='Menu_Col_Price'>
              <h5> $850 / 465g</h5>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <h2 style={{ width: '100%', fontWeight: '800', fontSize: '45px' }}>Trump Menu</h2>
            <br />
            <p>Trump menu with french fries and BB sauce</p>
            <br />

            <br />
            <Col xs={5} className='Menu_Col_Price'>
              <Button target='_blank' href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!' variant='warning'>Buy</Button>
            </Col>
            <Col xs={5} className='Menu_Col_Price'>
              <h5> $850 / 465g</h5>
            </Col>
          </Col>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <Image fluid className='FondoLogoImagen' src={imgBurger3}></Image>
          </Col>
        </Row>
      </Container>
	  <Container className='Menu_ImgBugerBreak'>
		<Image fluid src={imgBurgerBreak}></Image>
	  </Container>
    </Container>
  );
}

export default Menu;

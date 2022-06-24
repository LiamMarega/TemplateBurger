import React from 'react';
import { Container, Row, Col, Image, Button, Stack } from 'react-bootstrap';
import { imgBurger, imgBurgerBlack, imgBurger3, imgBurgerBreak } from '../../images/index.jsx';
import { GiHamburger } from 'react-icons/gi';
import { FaIceCream } from 'react-icons/fa';

import './Menu.css';
function Menu() {
  return (
    <Container fluid className='LandingPage__Container_Row_Tres'>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <h2 style={{ width: '100%', textAlign: 'start', fontWeight: '800', fontSize: '45px' }}>Trump Menu</h2>
            <br />
            <br />
            <p>Trump menu with french fries and BB sauce</p>
            <br />

            <br />
            <Col xs={5} className='Menu_Col_Price'>
              <Button variant='warning'>Buy</Button>
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
            <h2 style={{ width: '100%', textAlign: 'start', fontWeight: '800', fontSize: '45px' }}>Trump Menu</h2>
            <br />
            <br />
            <p>Trump menu with french fries and BB sauce</p>
            <br />

            <br />
            <Col xs={5} className='Menu_Col_Price'>
              <Button variant='warning'>Buy</Button>
            </Col>
            <Col xs={5} className='Menu_Col_Price'>
              <h5> $850 / 465g</h5>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className='Menu_Col' sm={12} md={6} xl={6}>
            <h2 style={{ width: '100%', textAlign: 'start', fontWeight: '800', fontSize: '45px' }}>Trump Menu</h2>
            <br />
            <p>Trump menu with french fries and BB sauce</p>
            <br />

            <br />
            <Col xs={5} className='Menu_Col_Price'>
              <Button variant='warning'>Buy</Button>
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
		<Image fluid src={imgBurgerBreak} fluid></Image>
	  </Container>
    </Container>
  );
}

export default Menu;

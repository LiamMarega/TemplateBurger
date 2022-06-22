import React from 'react';
import "./Presentacion.css"
import { imgBurger, imgLettuce, imgTomato, imgMeet } from '../../images/index.jsx';
import { Container, Row, Col, Image, } from 'react-bootstrap';

function Presentacion() {

	const containerStyle = {
		backgroundColor: 'black',
		backgroundAttachment: `fixed`
	  };

	  
  return (
    <Container fluid>
      <Row id='home' fluid className='LandingPage__Container_NavBar'>
        <Col style={containerStyle} className='Landingpage__Container_image'>
          <div className='Container_Landing__Letras'>
			<h3>MUNDO BURGER</h3>
            <h2>
              ¡GRACIAS POR <br />
              QUEDARTE EN <br />
              CASA!
            </h2>
          </div>
          <Image id='imgBurger' src={imgBurger} fluid width={700} />
          <div className='Images_BlackAndWhite'>
            <Image id='imgTomato' src={imgTomato} fluid width={200} />
            <Image id='imgLettuce' src={imgLettuce} fluid  />
            <Image id='imgMeet' src={imgMeet} fluid width={200} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Presentacion;

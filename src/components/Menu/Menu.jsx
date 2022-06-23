import React from 'react';
import { Container, Row, Col, Image,Button } from 'react-bootstrap';
import { imgBurger, imgBurger2, imgBurgerBlack, imgBurgerBreak } from '../../images/index.jsx';
import "./Menu.css"
function Menu() {
  return (
    <Container fluid className='LandingPage__Container_Row_Tres'>
      <Row >
        <Col sm={12} md={6} xl={6}>
          <h4>
				Trump Menu
          </h4>
            <br /> 
			<p>Trump menu with french fries and  BB sauce</p>
			<br />

			<br />
			<Col xs={5}> <Button>Buy</Button> </Col>
			<Col xs={5}> <h5> $850 / 465g</h5> </Col>
        </Col>
        <Col sm={12} md={6} xl={6}>
          <Image className='FondoLogoImagen' src={imgBurger} ></Image>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} xl={6}>
          <Image className='FondoLogoImagen' id='BurgerBlack' src={imgBurgerBlack}></Image>
        </Col>
        <Col sm={12} md={6} xl={6}>
          <p>
            El disco bar Food & Drink, ubicado en la zona rosa de Pereira , es uno de los locales mas climatizados el cual disfruta de un ambiente divertido con una decoración espectacular, suambiente moderno te asegura una noche divertida única y inolvidable. Su estructura se presenta como una obra 160 metros, por 90 metros aproximadamente capacidad aproximadamente para 250 personas y
            unaespectacular infraestructura en sonido, iluminación y video imagen. En Food & Drink lo encontraras todo, Alta tecnología, decoración vanguardista, son mezclas originales para que bailes desde tu mesa oen la pista.
            <br /> <br />
            En sus dos barras te ofrecerán una inmensa variedad de cócteles que son preparados por barman profesionales, licores variados, bebidas internacionales, nacionales y cerveza. Cuenta conun muy buen servicio al cliente, servicio de estacionamiento. Si quieres pasar una noche inolvidable sin duda en Food & Drink con su estilo juvenil, la diversión es asegurada, la entrada es libre,
            losprecios son accesibles puedes tener una noche inolvidable y divertida.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} xl={6}>
          <p>
            El disco bar Food & Drink, ubicado en la zona rosa de Pereira , es uno de los locales mas climatizados el cual disfruta de un ambiente divertido con una decoración espectacular, suambiente moderno te asegura una noche divertida única y inolvidable. Su estructura se presenta como una obra 160 metros, por 90 metros aproximadamente capacidad aproximadamente para 250 personas y
            unaespectacular infraestructura en sonido, iluminación y video imagen. En Food & Drink lo encontraras todo, Alta tecnología, decoración vanguardista, son mezclas originales para que bailes desde tu mesa oen la pista.
            <br /> <br />
            En sus dos barras te ofrecerán una inmensa variedad de cócteles que son preparados por barman profesionales, licores variados, bebidas internacionales, nacionales y cerveza. Cuenta conun muy buen servicio al cliente, servicio de estacionamiento. Si quieres pasar una noche inolvidable sin duda en Food & Drink con su estilo juvenil, la diversión es asegurada, la entrada es libre,
            losprecios son accesibles puedes tener una noche inolvidable y divertida.
          </p>
        </Col>
        <Col sm={12} md={6} xl={6}>
          <Image className='FondoLogoImagen' src={imgBurger}></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;

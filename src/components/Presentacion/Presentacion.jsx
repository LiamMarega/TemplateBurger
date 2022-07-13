import React from "react";
import "./Presentacion.css";
import { imgBurger, imgLettuce, imgTomato, imgMeet } from "../../images";
import { Container, Row, Col, Image } from "react-bootstrap";

function Presentacion() {
  const containerStyle = {
    backgroundColor: "black",
    backgroundAttachment: `fixed`
  };

  return (
    <Container fluid>
      <Row id="home" className="LandingPage__Container_NavBar">
        <Col
          xs={12}
          style={containerStyle}
          className="Landingpage__Container_image"
        >
          <div className="Container_Landing__Letras">
            <h3>MUNDO BURGER</h3>
            <h2>
              ¡GRACIAS POR <br />
              QUEDARTE EN <br />
              CASA!
            </h2>
          </div>

          <Image fluid id="imgBurger" src={imgBurger} />
          <div className="Images_BlackAndWhite">
            <Image fluid id="imgTomato" src={imgTomato} />
            <Image fluid id="imgLettuce" src={imgLettuce} />
            <Image fluid id="imgMeet" src={imgMeet} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Presentacion;

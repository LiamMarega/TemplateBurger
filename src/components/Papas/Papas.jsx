import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Papas.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  imgPapasChicas,
  imgPapasMedianas,
  imgPapasGrandes
} from "../../images";
import { Animated } from "react-animated-css";

function Papas() {
  const [isVisibleAnimated, setIsVisibleAnimated] = useState(false);

  const activeAnimations = () => {
    if (window.scrollY >= 3200) {
      setIsVisibleAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activeAnimations);

    return () => {
      window.removeEventListener("scroll", activeAnimations);
    };
  }, []);

  return (
    <Container className="Papas_Container">
      <Container>
        <Row style={{ width: "100%" }}>
          <Col
            id="PapasColMargin"
            className="Papas_Col"
            sm={5}
            md={5}
            xl={{ span: 3, offset: 1 }}
          >
            <Animated
              animationIn="bounceIn"
              animationOut="flipOutX"
              animationInDuration={1400}
              animationOutDuration={1400}
              isVisible={isVisibleAnimated}
            >
              <Image loading="lazy" src={imgPapasChicas} />
            </Animated>
            <div className="Papas_ContainerInfo">
              <h4 class="display-6 fs-2 fs-lg-3 fw-bold">PORCIÓN CHICA</h4>
              <p class="mb-0">
                Disfruta las mejores papas recién hechas con un balo de cheddar
                y verdeo en una porción individual solo para vos.
              </p>
            </div>
          </Col>
          <Col className="Papas_Col" sm={5} md={5} xl={{ span: 3, offset: 1 }}>
            <Animated
              animationIn="bounceIn"
              animationOut="flipOutX"
              animationInDuration={1400}
              animationOutDuration={1400}
              isVisible={isVisibleAnimated}
            >
              <Image loading="lazy" src={imgPapasMedianas} />
            </Animated>
            <div className="Papas_ContainerInfo">
              <h4 class="display-6 fs-2 fs-lg-3 fw-bold">PORCIÓN MEDIANA</h4>
              <p class="mb-0">
                Si lo tuyo es compartir el sabor, te traemos una porción mediana
                con extra queso y verdeo para que todos disfruten de la misma
                manera que vos.
              </p>
            </div>
          </Col>
          <Col className="Papas_Col" sm={5} md={5} xl={{ span: 3, offset: 1 }}>
            <Animated
              animationIn="bounceIn"
              animationOut="flipOutX"
              animationInDuration={1400}
              animationOutDuration={1400}
              isVisible={isVisibleAnimated}
            >
              <Image loading="lazy" src={imgPapasGrandes} />
            </Animated>
            <div className="Papas_ContainerInfo">
              <h4 class="display-6 fs-2 fs-lg-3 fw-bold">PORCIÓN XXL</h4>
              <p class="mb-0">
                Porción XXL para disfrutar en familia y amigos. Papas bañadas
                con cheddar y verdeo en una porción que alegra el corazón.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Papas;

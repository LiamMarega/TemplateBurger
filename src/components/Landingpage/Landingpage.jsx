import React, { useState, useEffect } from 'react';

import './Landingpage.css';

import { LocalAnimado, bar2, bar3, Galeria1, Galeria2, Galeria3, Galeria4, Galeria5, Galeria6, Galeria7, Galeria8 } from '../../images/index.jsx';
import { ImgMenu } from '../../images/index.jsx';
import { Container, Row, Col, Image, Figure, Spinner } from 'react-bootstrap';

import { AiFillPhone, AiFillInstagram, AiFillFacebook, AiFillMail } from 'react-icons/ai';
import { GiSuitcase } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';

/* Material UI */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import NavBar from '../NavBar/NavBar';
import Presentacion from '../Presentacion/Presentacion';
import SeccionTresBurgers from '../SeccionTresBurgers/SeccionTresBurgers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 400,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

function srcset(image, size, rows = 2, cols = 2) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  };
}

const itemData = [
  {
    img: Galeria1,
    title: 'Breakfast',
    rows: 2,
    cols: 2
  },
  {
    img: Galeria2,
    title: 'Burger'
  },
  {
    img: Galeria3,
    title: 'Camera'
  },
  {
    img: Galeria4,
    title: 'Coffee',
    cols: 2
  },
  {
    img: Galeria5,
    title: 'Hats',
    cols: 2
  },
  {
    img: Galeria6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2
  },
  {
    img: Galeria7,
    title: 'Basketball'
  },
  {
    img: Galeria8,
    title: 'Fern'
  }
];

function Landingpage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  /* TIMEOUT PARA LOADING */

  /*   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
 */

  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Image src={ImgMenu} width='100%' />
          </Box>
        </Fade>
      </Modal>

      <Container fluid className={loading ? 'loading true' : 'loading false'}>
        <Spinner animation='grow' variant='light' />
      </Container>

      <Container fluid className='LandingPage__Container'>
        {/* navbar */}
        <NavBar handleOpen={handleOpen} />
        <Presentacion />

        {/* SECCION 2 */}
        <Row className='LandingPage__Container_Row_Dos'>
          <Col xs={12} xl={12}>
            <Figure className='LandingPage__LogoBar'>
              <Figure.Image className='FigureLocal' alt='LocalAnimado' src={LocalAnimado} />
            </Figure>
          </Col>

          <Col xs={12} xl={12}>
            <Container>
              <Col>
                <h2>LADO NORTE</h2>
                <p id='letraReposteria'>Reposteria Paraná, Entre Ríos.</p>
                <p>Según Wikipedia, un párrafo es un discurso contenido en una unidad de texto que comparte una misma idea o punto de vista. Un párrafo se compone de una o más frases. Aunque se contempla como norma en ningún idioma, los párrafos se emplean en la escritura formal para organizar textos extensos.</p>
              </Col>
              <Col className='Col_Button'>
                <button onClick={handleOpen} className='learn-more'>
                  <span className='circle' aria-hidden='true'>
                    <span className='icon arrow'></span>
                  </span>
                  <span className='button-text'>Ver menu</span>
                </button>
              </Col>
            </Container>
          </Col>
        </Row>

        {/* SECCION 3 */}
		<SeccionTresBurgers />
        {/* SECCION 4 */}
        <Row id='about' className='LandingPage__Container_Row_Cinco'>
          <Col className='LogoImagenInfo' sm={12} md={6} xl={6}>
            <Image className='LogoImagenInfo' src={bar2}></Image>
            <h3>Horarios</h3> <p>6:00 am - 19:00 pm</p>
            <Image className='LogoImagenInfo' src={bar3}></Image>
            <h3>Horarios</h3> <p>Entre Ríos, Paraná.</p>
          </Col>

          <Col sm={12} md={6} xl={6}>
            <iframe className='Mapa' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54285.58907590346!2d-60.55006831376418!3d-31.747313687934355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44df2b9835231%3A0x554ebde0aa5cfa9a!2zUGFyYW7DoSwgRW50cmUgUsOtb3M!5e0!3m2!1ses-419!2sar!4v1646352251697!5m2!1ses-419!2sar' loading='lazy'></iframe>
          </Col>
        </Row>

        <Row id='about' className='LandingPage__Container_Row_Siete'>
          <Col sm={12} className='Container_Col_Images'>
            <ImageList sx={{ width: '100%', height: '50%' }} variant='quilted' cols={4} rowHeight={121}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <img {...srcset(item.img, 500, item.rows, item.cols)} alt={item.title} loading='lazy' />
                </ImageListItem>
              ))}
            </ImageList>
          </Col>
          <Col sm={12}>
            <button onClick={handleOpen} className='learn-more'>
              <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>Ver menu</span>
            </button>
          </Col>
        </Row>

        <Row className='LandingPage__Container_Row_Footer'>
          <Col sm={12} xl={12}>
            <div className='centradoFooter'>
              <ul className='FooterList'>
                <a href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!' target='_blank' rel='noopener noreferrer'>
                  <li>
                    <AiFillPhone /> CONTACTANOS
                  </li>
                </a>
                <a target='_blank' href='https://www.instagram.com/empresasoluciones/'>
                  <li>
                    <ImLocation2 /> ENCONTRANOS
                  </li>
                </a>
                <a href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!' target='_blank' rel='noopener noreferrer'>
                  <li>
                    <GiSuitcase /> TRABAJA CON NOSOTROS
                  </li>
                </a>
                <a href='mailto:liammarega85@gmail.com' target='_blank' rel='noopener noreferrer'>
                  <li>
                    <AiFillMail /> CORREO
                  </li>
                </a>
                <a href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!' target='_blank' rel='noopener noreferrer'>
                  <li>
                    <AiFillInstagram /> INSTAGRAM
                  </li>
                </a>
                <a href='https://api.whatsapp.com/send?phone=+543436203341&text=Hola,%20vi%20la%20plantilla%20de%20tu%20pagina%20web%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n!' target='_blank' rel='noopener noreferrer'>
                  <li>
                    <IoLogoWhatsapp /> WHATSAPP
                  </li>
                </a>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landingpage;

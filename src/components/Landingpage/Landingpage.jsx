import React, { useState } from 'react';

import './Landingpage.css';

import { ImgMenu } from '../../../public/images/index.jsx';
import { Container, Image, Spinner } from 'react-bootstrap';

/* Material UI */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import NavBar from '../NavBar/NavBar';
import Presentacion from '../Presentacion/Presentacion';
import SeccionTresBurgers from '../Menu/Menu';
import Papas from '../Papas/Papas';
import Footer from '../Footer/Footer';

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

/* const itemData = [
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
]; */

function Landingpage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>



      <Container fluid className='LandingPage__Container'>
        {/* NAVBAR */}
        <NavBar handleOpen={handleOpen} />
        {/* SECCION 2 */}
        <Presentacion />
        {/* SECCION 3 */}
        <SeccionTresBurgers />
        {/* SECCION 4 */}
        <Papas />
        {/* FOOTER */}
        <Footer />
      </Container>
    </>
  );
}

export default Landingpage;

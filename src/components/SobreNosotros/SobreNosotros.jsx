import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './SobreNosotros.css';

import { Container, Image, Spinner } from 'react-bootstrap';

/* import images */
import { imgBurger, imgBurger2, imgBurger3, imgPapasGrandes, imgPapasChicas, imgTomato, imgMeet, imgLettuce } from '../../../public/images/index.jsx';

/* Material UI */

import NavBar from '../NavBar/NavBar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  };
}
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

function SobreNosotros() {
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

  const itemData = [
    {
      img: imgBurger,
      title: 'imgBurger',
      rows: 2,
      cols: 2
    },
    {
      img: imgBurger3,
      title: 'imgBurger3'
    },
    {
      img: imgPapasGrandes,
      title: 'imgPapasGrandes',
      cols: 2
    },
    {
      img: imgLettuce,
      title: 'imgLettuce'
    }
  ];

  const itemData2 = [
    {
      img: imgTomato,
      title: 'Hats',
      cols: 2
    },
    {
      img: imgPapasChicas,
      title: 'imgPapasChicas',
      author: '@imgPapasChicas',
      rows: 2,
      cols: 2
    },
    {
      img: imgMeet,
      title: 'imgMeet'
    }
  ];

  return (
    <>
      <Container fluid className={loading ? 'loading true' : 'loading false'}>
        <Spinner animation='grow' variant='light' />
      </Container>
      <NavBar handleOpen={handleOpen} />
      <Container fluid className='SobreNosotros__Container'>
        <Container fluid>
          <ImageList sx={{ width: '100%', height: '100%' }} variant='quilted' cols={12}>
            {itemData2.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <Image fluid {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
        <Container className='SobreNosotros_Text'>
          <h2>The Burger House Story</h2>
          <p>
            En 2010, el fundador de Burger House, Nicolas Hegewisch, tuvo la oportunidad de perfeccionar sus habilidades culinarias en el French Culinary Institute de Nueva York y no lo dudó. <br />
            Junto con su esposa, Paty, quien también es gerente de un restaurante, cruzó el estanque hacia la gran ciudad. <br />
            Compartían un gran sueño: dirigir juntos un restaurante propio algún día. <br /> Regresaron a Munich en 2011, habiendo adquirido una experiencia invaluable. Inspirándose en el estilo americano de comida, no esperaron mucho y abrieron su primera Burger House en Munich Haidhausen en enero de 2012. <br />
            Su misión era comida de alta calidad, productos frescos y atención al detalle. Hasta el día de hoy, todos los restaurantes Burger House siguen esa misión original.
          </p>
          <br />
          <button class='cta' href='/'>
		  <Link to="/">
            <span>Volver al Inicio</span>
            <svg viewBox='0 0 13 10' height='10px' width='15px'>
              <path d='M1,5 L11,5'></path>
              <polyline points='8 1 12 5 8 9'></polyline>
            </svg>
		  </Link>
          </button>
        </Container>
        <Container fluid>
          <ImageList sx={{ width: '100%', height: '100%' }} variant='quilted' cols={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <Image fluid {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Container>
    </>
  );
}

export default SobreNosotros;

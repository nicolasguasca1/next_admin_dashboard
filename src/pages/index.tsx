import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faBook,
  faExternalLinkAlt,
  // faTimesCircle,
  // faCheckCircle,
  // faCalendarAlt,
  // faCodeBranch,
  // faShoppingCart,
  faFolder,
  // faMapMarkedAlt,
  // faPager,
  // faFileCode,
  // faDownload,
} from '@fortawesome/free-solid-svg-icons';
// import { faBootstrap, faGithub, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import {
  Col,
  Carousel,
  Row,
  Card,
  Image,
  Button,
  Container,
  // ListGroup,
  Tooltip,
  OverlayTrigger,
  // Form,
  Navbar,
  Nav,
  // Badge,
} from '@themesberg/react-bootstrap';
import Link from 'next/link';

// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import Code from '../components/CodeEditor';
import Dashboard from './Dashboard';
import Footer from '../components/footer/Index';

// import GitHubButton from 'react-github-btn';

// import { Routes } from '../routes';
// import ThemesbergLogoIcon from '../assets/img/themesberg.svg';
// import ThemesbergLogo from '../assets/img/themesberg-logo.svg';
// import MockupPresentation from '../assets/img/mockup-presentation.png';
// import ReactHero from '../assets/img/technologies/react-hero-logo.svg';
// import MapboxImg from '../assets/img/mockup-map-presentation.png';
// import CalendarImg from '../assets/img/mockup-calendar-presentation.png';
// import ReactMockupImg from '../assets/img/react-mockup.png';
// import BS5IllustrationsImg from '../assets/img/illustrations/bs5-illustrations.svg';
// import BS5Logo from '../assets/img/technologies/bootstrap-5-logo.svg';
// import ReactLogo from '../assets/img/technologies/react-logo.svg';
import ticket from '../../public/assets/img/ticket.png';
import lupa from '../../public/assets/img/lupa.png';
import truck_logo from '../../public/assets/img/truck_logo.png';

// import pages from '../data/pages';
// import features from '../data/features';

const PagePreview = (props) => {
  const { name, image, link } = props;

  return (
    <Col xs={6} className="mb-5">
      <Card.Link href={link} className="page-preview page-preview-lg scale-up-hover-2">
        <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

        <div className="text-center show-on-hover">
          <h6 className="m-0 text-center text-white">
            {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
          </h6>
        </div>
      </Card.Link>
    </Col>
  );
};

const Feature = (props) => {
  const { title, description, icon } = props;

  return (
    <Col xs={12} sm={6} lg={3}>
      <Card className="bg-white shadow-soft text-primary rounded mb-4">
        <div className="px-3 px-lg-4 py-5 text-center">
          <span className="icon icon-lg mb-4">
            <FontAwesomeIcon icon={icon} />
          </span>
          <h5 className="fw-bold text-primary">{title}</h5>
          <p>{description}</p>
        </div>
      </Card>
    </Col>
  );
};

const FolderItem = (props) => {
  const { name, icon, tooltip, iconColor } = props;
  const color = iconColor ? `text-${iconColor}` : '';

  return (
    <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={<Tooltip>{tooltip}</Tooltip>}>
      <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
        <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
      </li>
    </OverlayTrigger>
  );
};

const Index = () => {
  const router = useRouter();
  const isLogged = useState(false);
  if ((isLogged[0] = false)) {
    console.log(isLogged[0]);
    return <Dashboard />;
  }
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="dark"
        className="navbar-transparent navbar-theme-primary sticky-top bg-gradient"
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand href="/" className="me-lg-3 d-flex align-items-center">
            <Image src="assets/img/truck_logo.png" />
            <span className="ms-2 brand-text d-none d-md-inline">Tripool</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link href="dashboard/overview">Explorar Dashboard</Nav.Link>
                <Nav.Link href="signin">Inicio de sesión</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button href="signup" variant="outline-white" className="ms-3">
              Registro
            </Button>
          </div>
        </Container>
      </Navbar>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white bg-gradient"
        id="home"
      >
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="header">
                <div className="p-5 ">
                  <Carousel className="container p-5">
                    <Carousel.Item interval={3000}>
                      <img className="d-block" src="assets/img/ticket.png" alt="ticket" width="25%" />
                      <Carousel.Caption className="text-end">
                        <h3>A dónde quieras llegar</h3>
                        <p>Utiliza nuestras rutas para llevar tus productos en el menor tiempo posible.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <img className="d-block" src="assets/img/lupa.png" alt="lupa" width="25%" />
                      <Carousel.Caption className="text-end">
                        <h3>Manten el control de tus datos</h3>
                        <p>Te damos las herramientas para que puedas ver la evolución de tus órdenes en tiempo real</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <Footer showSettings={true} currentYear={0} toggleSettings={() => {}} toggle={false} />
    </>
  );
};

export default Index;

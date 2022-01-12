import React from 'react';
import moment from 'moment-timezone';
import { Row, Col, Card, Image, Navbar, Container } from '@themesberg/react-bootstrap';
import Link from 'next/link';
import { Routes } from '../../routes';

import truck_logo from '../../assets/img/truck_logo.png';

type FooterProps = {
  showSettings: Boolean;
  currentYear: number;
  toggleSettings: (toggle: Boolean) => void;
  toggle: Boolean;
};

const Footer: React.FC<FooterProps> = (props) => {
  const currentYear = moment().get('year');
  const showSettings = props.showSettings;

  const toggleSettings = (toggle: Boolean) => {
    props.toggleSettings(toggle);
  };

  return (
    <div>
      <footer className="footer py-6 bg-dark text-white bg-gradient">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand href="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src="../../assets/img/truck_logo.png" />
                <span className="ms-2 brand-text">Tripool</span>
              </Navbar.Brand>
              <p>Nuestro objetivo es brindar el mejor servicio de logística para sus necesidades de transporte.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Información</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link target="_blank" href="/components/rates">
                    Tarifas
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="/">
                    Cobertura geográfica
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="https://themesberg.com/about">
                    Horarios de atención
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="https://themesberg.com/contact">
                    Contáctenos
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Enlaces de interés</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} href={Routes.DocsQuickStart.path}>
                    Preguntas frecuentes
                  </Card.Link>
                </li>
                <li>
                  <Card.Link as={Link} href={Routes.About.path}>
                    Sobre nosotros
                  </Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank" href="https://themesberg.com/licensing">
                    Términos y condiciones de servicio
                  </Card.Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="d-flex justify-content-center justify-content-lg-between p-4">
              <div className="text-left" role="contentinfo">
                <p className="font-weight-normal font-small mb-0 ">
                  Copyright © Tripool SAS 2021. Todos los derechos reservados.
                </p>
              </div>
              <div className="text-right" role="contentinfo">
                <p className="text-muted font-small m-0 ">
                  Consulte nuestra{' '}
                  <Card.Link className="text-white" href="#">
                    Política de Privacidad
                  </Card.Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

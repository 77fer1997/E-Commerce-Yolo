import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Introducir",
    path: "/about",
  },
  {
    display: "Contacto",
    path: "/about",
  },
  {
    display: "Recluta",
    path: "/about",
  },
  {
    display: "Noticias",
    path: "/about",
  },
  {
    display: "Sistema de tienda",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Política de devoluciones",
    path: "/about",
  },
  {
    display: "Póliza de garantía",
    path: "/about",
  },
  {
    display: "Política de reembolso",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">CENTRO DE LLAMADAS SOPORTE</div>
            <div className="footer__content">
              <p>
                Contacto para ordenar <strong>0123456789</strong>
              </p>
              <p>
                Pedidos Consulta <strong>0123456789</strong>
              </p>
              <p>
                Comentarios y quejas <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">SOBRE YOLO</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Atención al cliente</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Hacia el objetivo de brindar una nueva alegría de vestir todos los
              días a millones de consumidores de todo el mundo.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;

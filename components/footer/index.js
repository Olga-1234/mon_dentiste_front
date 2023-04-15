import Image from "next/image";
import Link from "next/link";

import style from "./style.module.css";
const Footer = () => {
  return (
    // <footer className={` container d-flex col-12 border-top  flex-wrap py-5  my-5 justify-content-between   pt-100 lg-pt-90 md-pt-80 pb-92 md-pb-72 sm-pb-80`}>
    <footer
      className={` container d-flex col-12 border-top  flex-wrap py-5 ${style.Rspb}  my-5 justify-content-between   `}
    >
      <div className=" col-12 col-md-5">
        <Link href="/" passHref><a className={`${style.linkLogo} h2`}>Mon Dentiste</a></Link>
        <p className="pt-3">
          Mon Dentiste est une plateforme qui regroupe différents cabinets
          dentaires et lui donne la possibilité de contacter le cabinet de son
          choix
        </p>
      </div>
      <div className="col-12 col-md-5 col-md-px-5">
        <h2>Service</h2>
        <ul>
          <li>Cabinets</li>
          <li>A propos de nous</li>
          <li>Prendre rendez-vous</li>
        </ul>
      </div>
      <div className="col-12 col-md-2 ">
        <div className={`col-12  ${style.dflex} `}>
          <i className={`bi bi-facebook d-block ${style.textrice} h3 d-flex  justify-content-center  ${style.dNone} `}></i>
          <i className={`bi bi-instagram d-block h3 d-flex ${style.textrice} justify-content-center ${style.dNone}`}></i>
          <i className={`bi bi-twitter d-block h3 d-flex ${style.textrice} justify-content-center ${style.dNone}`}></i>
          <i className={`bi bi-linkedin d-block h3 d-flex ${style.textrice} justify-content-center ${style.dNone}`}></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

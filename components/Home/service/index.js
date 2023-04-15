import CardService from "../../Card/Service";
import style from "./style.module.css";
const Services = () => {
  return (
    <div className="container">
      <h2 className="  pb-5 fw-bold">Services</h2>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
        <CardService
          texte={"soins dentaire"}
          bg={style.bg1}
          outils={" bi bi-tools"}
        />
        <CardService texte={"lavage "} bg={style.bg4} outils={"bi bi-hammer"} />
        <CardService
          texte={"lavage "}
          bg={style.bg3}
          outils={"bi bi-eyedropper"}
        />
        <CardService
          texte={"lavage "}
          bg={style.bg5}
          outils={"bi bi-tsunami"}
        />
      </div>
    </div>
  );
};

export default Services;

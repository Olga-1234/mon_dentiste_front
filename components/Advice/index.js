import style from "./style.module.css";

const Advice = () => {
  return (
    <div className={`col-12 py-5 container `}>
        <h2 className="fw-bold pt-5">Conseils</h2>

              <h3 className="h5 fw-bold py-4 text-center ">
                Comment bien prendre soin de ses dents?{" "}
              </h3>

              <p className={` `}>
                Brossage des dents 2 à 3 fois par jour après les repas. Le
                brossage des dents est indispensable pour éviter la carie, le
                tartre et conserver des dents en bonne santé. Vous pouvez
                utiliser une brosse à dents souple et un dentifrice au fluor.
                Pour être efficace, le brossage doit s'effectuer avec méthode,
                idéalement après chaque repas, et durer deux à trois minutes. Il
                faut brosser toutes les surfaces de dents: à l'intérieur, à
                l'extérieur, au-dessus et au-dessous. méthode de brossage
              </p>
    </div>
  );
};

export default Advice;

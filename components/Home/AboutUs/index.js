import Image from "next/image";
import style from "./style.module.css";
import doctors from "../../../assets/dentiste.png";
import dents from "../../../assets/dents.jpeg";
import curedent from "../../../assets/curedent.jpeg"
import deuxdents from "../../../assets/deuxdents.jpeg"

const CardAndBgWhite = () => {
  return (
    <div className={`  col-12 ${style.bgImage} `}>
      <div className= {`d-flex ${style.respensiveReverse} py-5 `}>
      <div className={`${style.respensiveCard2} col-6 col-md-6 col-sm-5 col-xs-6 d-flex align-items-start d-flex justify-content-center`}>
          <div className="py-lg-5">
            <Image className=" d-flex " src={doctors} height="" width="" />
          </div>
        </div>

        <div className={`col-6 col-md-6 col-sm-5 col-xs-6   d-flex  justify-content-center ${style.respensiveCard1}`}>
          <div className={`pt-4 pr-4 ${style.openSans}`}>
            <div className={`py-lg-5  justify-content-center `}>
              <h2 className={`fw-bold py-lg-2  text-center ${style.colorgreen} ${style.montserat}`}>
                Nous vous mettons en contact
              </h2>

              <div className=" ">
                <p className={`px-lg-5 col-12 ${style.respensivepadding}`}>
                  Nous  vous mettons en contact avec les meilleurs dentistes du Congo
                  vous avez la posibilité de prendre rendez-vous et suivre l'historique de vos rendez vous
               
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>

    


      
    </div>
  );
};

export default CardAndBgWhite;

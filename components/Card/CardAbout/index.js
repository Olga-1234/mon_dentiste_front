import cuate from "../../../assets/cuate.png";
import Image from "next/image";
import Title from "../../title";
import About from "../../../assets/About.png";

const CardAbout = () => {
  return (
    <div>
      <div className="pt-3   ">
        <div className="d-flex px-5  justify-content-end">
          <div className={`col-2 pt-5`}>
            <Image src={cuate} alt="cuate" height="" width="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Title text="A propos de nous" />
      </div>
      <div className="d-flex  justify-content-around">
        <div className="">
          <Image src={About} height="200" alt="about" width="200" />
        </div>
        <div className="d-flex align-items-center">
          <p>
            Nous vous mettons en contact avec les meilleurs cabinets dentaire, <br/>
            et cela vous permet de prendre rendez-vous sans vous deplacer
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center py-5">
        <p>
        Nous vous mettons en contact avec les meilleurs cabinets dentaire, <br/>
            et cela vous permet de prendre rendez-vous sans vous deplacer
        </p>
      </div>
      <div className="d-flex justify-content-end px-5 py-5">
        <p>
        Nous vous mettons en contact avec les meilleurs cabinets dentaire, <br/>
            et cela vous permet de prendre rendez-vous sans vous deplacer
        </p>
      </div>
    </div>
  );
};

export default CardAbout;

import style from "./style.module.css";
const Services = ({texte, bg, outils}) => {
  return (
    <div>

      <div className={`  py-5 ${style.pResp}   ${bg} `}>
        <h2 className={` ${style.fontSize} text-center `}>{texte}</h2>
        <p className={`py-3 ${style.pResp} text-center`}>
          <i className={outils} style={{ fontSize: 50 }}></i>
        </p>
      </div>
    </div>
  );
};

export default Services;

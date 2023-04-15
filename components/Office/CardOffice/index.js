import Image from "next/image";
import cabinet from "../../../assets/cabinet.png";
import style from "./style.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCabinet } from "../../../redux";
import { useEffect, useState} from "react";

const CardCabinet = ({className}) => {
  const Cabinets = useSelector((state) => state.Cabinet.cabinets);
  const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    console.log(token, 'le token navbar');

    


  console.log("les donnéées", Cabinets);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCabinet()), []);
  return (
    <div className={className}>
      {Cabinets.map((Cabinet) => (
        <div key={Cabinet.id} className="d-flex justify-content-center   my-5 ">
          <div
            className={`d-flex col-lg-12 justify-content-between ${style.boxshadow} ${style.respensiveReverse}`}
          >
            <div
              className={`col-lg-4 bg-light p-5  ${style.respensivemarginLefRight}`}
            >
              <Image src={cabinet} height="" width="" className="" />
            </div>
            <div className="col-lg-8 px-3 border-lg ">
              <div
                className={`d-flex col-lg-12  py-3 px-3 justify-content-between ${style.respensive}`}
              >
                <div className="col-lg-6">
                  <h2>{Cabinet.name}</h2>
                </div>

          
              </div>

              <div className="d-flex px-3">
                <i class="bi bi-geo-alt"></i>
                <p className="px-3">{Cabinet.address}</p>
              </div>

              <div className="d-flex px-3">
              <i class="bi bi-award"></i>
                <p className=" px-3">
                  service: détartrage, plombage, extractions, prothèses
                </p>
              </div>
              <div className="d-flex px-3">
              <i class="bi bi-alarm"></i>
                <p className=" px-3">
                  <span> {Cabinet.openTime}</span> -{" "}
                  <span> {Cabinet.closureTime}</span>
                </p>
              </div>

              <div className="d-flex px-3">
              <i class="bi bi-telephone"></i>
                <p className="px-3">{Cabinet.phone}</p>
              </div>

              <div className="d-flex px-3 ">
                <i class="bi bi-envelope"></i>
                <p className="px-3">{Cabinet.email}</p>
              </div>
              <div className=" py-2 d-flex">
              {token ? ( <Link href="/AdminPage">
                    <a className={`text-decoration-none py-2 px-2 fw-bold ${style.fontSize} ${style.bdlink}`}>
                 
                        prendre rendez-vous

                    </a>
                  </Link>): ( <Link href="/login">
                    <a className={`text-decoration-none py-2 px-2 fw-bold ${style.fontSize} ${style.bdlink}`}>
                 
                        prendre rendez-vous

                    </a>
                  </Link>)}
                 
                </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCabinet;

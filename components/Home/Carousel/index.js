import Image from "next/image";
import style from "./style.module.css";
import carousel1 from "../../../assets/pana.png";
import carousel2 from "../../../assets/bro.png";
import carousel3 from "../../../assets/bro2.png";
import Button from "../../button";
import Link from "next/link";
import {useState, useEffect} from "react"

const Carousel = ({ className }) => {
  const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    console.log(token, 'le token navbar');

  return (
    <div className={` ${className} d-flex col-12    ${style.respensive}`}>
      <section className={`  col-12 ${style.respensiveCard2}`}>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className={`  carousel-item active `} data-bs-interval="10000">
              <div className=" d-flex row   justify-content-center">
                <div className="d-flex justify-content-center">
                  <Image
                    className="d-flex img-fluid "
                    src={carousel1}
                    width=""
                    height=""
                    alt="..."
                    blurDataURL={carousel1}
                    placeholder="blur"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  {token ? (    <Link href="/AdminPage" passHref>
                    <a
                      className={` ${style.bdbutton} text-decoration-none py-2 my-3 fw-bold px-2`}
                    >
                      Prendre rendez-vous
                    </a>
                  </Link>) : (    <Link href="/login" passHref>
                    <a
                      className={` ${style.bdbutton} text-decoration-none py-2 my-3 fw-bold px-2`}
                    >
                      Prendre rendez-vous
                    </a>
                  </Link>)}
              
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div className=" d-flex row   justify-content-center">
                <div className=" d-flex justify-content-center">
                  <Image
                    className="d-flex  img-fluid"
                    src={carousel2}
                    width=""
                    height=""
                    alt="..."
                    blurDataURL={carousel2}
                    placeholder="blur"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <Link href="/prendre_rendez_vous">
                    <a
                      className={` ${style.bdbutton} text-decoration-none py-2 my-3 fw-bold px-2`}
                    >
                      Prendre rendez-vous
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className=" d-flex row justify-content-center">
              <div className=" d-flex justify-content-center">

                <Image
                  className="d-flex img-fluid"
                  src={carousel3}
                  width=""
                  height=""
                  alt="..."
                  blurDataURL={carousel3}
                  placeholder="blur"
                />
                </div>
                <div className="d-flex justify-content-center">
                  <Link href="/prendre_rendez_vous">
                    <a
                      className={` ${style.bdbutton} text-decoration-none py-2 my-3 fw-bold px-2`}
                    >
                      Prendre rendez-vous
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Carousel;

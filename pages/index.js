/* eslint-disable no-unused-vars */

import Head from "next/head";
import Carousel from "../components/Home/Carousel";
import AboutUs from "../components/Home/AboutUs";
import Footer from "../components/footer";
import Services from "../components/Home/service";
import NavBar from "../components/navBar";
import style from "../styles/style.module.css";
import Advice from "../components/Advice";

const Home = () => {
  return (
    <div className={` ${style.scroll} `}>
      <NavBar />

      <div className="pt-5 col-12">
        <Carousel className="col-12" />
      </div>
      <AboutUs />
      <Services />
      <Advice />
      <Footer />
    </div>
  );
};
export default Home;

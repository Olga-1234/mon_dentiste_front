/* eslint-disable no-unused-vars */
import Head from "next/head";
import CardCabinet from "../components/Office/CardOffice";
import Office from "../components/Office/CardOffice";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import Title from "../components/title";

const trouver_un_dentiste = () => {
  return (
    <div className=''>
      <NavBar />
      <div className="pt-5">
        <Title
          className="d-flex pt-5 justify-content-center"
          text="Les Cabinets"
        />
      </div>
        <CardCabinet className="container " />

      <Footer />
    </div>
  );
};

export default trouver_un_dentiste;

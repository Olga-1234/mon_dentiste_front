import Head from "next/head";
import CardAbout from "../components/Card/CardAbout";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Apropos = () => {
  return (
    <div>
      <NavBar />
      <CardAbout />
      <Footer />
    </div>
  );
};

export default Apropos;

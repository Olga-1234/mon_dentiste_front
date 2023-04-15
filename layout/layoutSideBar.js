import SideBar from "../components/SideBar";
import Head from "next/head";
import style from "./style.module.css";

const LayoutSideBar = ({ children, titre }) => {
  return (
    <div>
      <Head>
        <title>{titre}</title>
      </Head>
      <div className={`  `}>
        <div className="col-3">
          <SideBar />
        </div>
        <div className={`${style.ml280px} col-11`}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutSideBar;

import Form from "../../components/form/SendArticle";
import Layout from "../../layout/layoutSideBar";
import TableArticles from "../../components/Table/tableArticles";
import { useEffect,useState } from "react";
import Nofound from '../notfound';

const Articles = () => {
  const [state, setState] = useState({ roles: [] });
  useEffect(() => {
      setState({ roles: localStorage.getItem('roles').split(',') });
      console.log(localStorage.getItem('roles').split(','));
  }, []);
  return (
    <>
     { state.roles.indexOf('dentiste') > -1 ? (
    <Layout titre={"Articles"}>
      <div className="d-flex row justify-content-center">
        <Form />
        <TableArticles />
      </div>
    </Layout>
     )   : <Nofound/> 
    }
    </>

  );
};

export default Articles;

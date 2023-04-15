import { useEffect,useState } from "react";
import Layout from "../../layout/layoutSideBar";
import TableAppointmentCabinet from "../../components/Table/tableAppointmentCabinet";
import Nofound from '../notfound';

const index = () => {
  const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
    }, []);

  return (
    <>
    { state.roles.indexOf('dentiste') > -1 ? (
    <Layout titre={"Rendez-vous"}>
      <div className="col-12 d-flex justify-content-center pt-4">
        <div className="col-10">
          <TableAppointmentCabinet/>
        </div>{" "}
      </div>
    </Layout>
        )   : <Nofound/> 
      }
      </>
  );
};

export default index;

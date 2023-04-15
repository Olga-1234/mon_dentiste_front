import Layout from '../../layout/layoutSideBar';
import { useEffect,useState } from "react";
import TableAppointmentAdmin from '../../components/Table/tableAppointmentAdmin';
import Nofound from '../notfound';

const index = () => {
   
    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
    }, []);
    return (
      <>
      { state.roles.indexOf('admin') > -1 ? (
        <Layout titre={'Rendez-vous'}>
           
            <div className="col-12 d-flex justify-content-center pt-4">
                <div className="col-10">
                    <h1 className="text-center py-3">Tous les rendez-vous</h1>

                    <TableAppointmentAdmin />
                </div>{' '}
            </div>
           
          
        </Layout>
         )   : <Nofound/> 
        }
        </>
    );
};

export default index;

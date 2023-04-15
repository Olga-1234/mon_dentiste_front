import Form from '../../components/form/SendArticle';
import Layout from '../../layout/layoutSideBar';
import AppointmentForm from '../../components/form/SendAppointment';
import TableAppointment from '../../components/Table/tableAppointment';
import { useEffect, useState } from 'react';
import Nofound from '../notfound';

const index = () => {
    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
    }, []);

    return (
        <>
            {state.roles.indexOf('customer') > -1 ? (
                <Layout titre={'Rendez-vous'}>
                    <div className="col-12 d-flex justify-content-center pt-4">
                        <div className="col-10">
                            <AppointmentForm />
                            <TableAppointment />
                        </div>
                    </div>
                </Layout>
            ) : (
                <Nofound />
            )}
        </>
    );
};

export default index;

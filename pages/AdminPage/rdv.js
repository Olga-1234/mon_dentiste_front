import Appointment from "../../components/form/SendAppointment"
import Layout from "../../layout/layoutSideBar"
import { useEffect, useState } from 'react';
import Nofound from '../notfound';


const Rdv = () => {
    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
    }, []);
    return (
        <>
        {state.roles.indexOf('customer') > -1 ? (
        <Layout>
            <Appointment/>
            <tableAppointment/>
        </Layout>
        ) : (
            <Nofound />
        )}
    </>
    )
}

export default Rdv

import SendUsers from '../../components/form/SendUsers';
import TableUsers from '../../components/Table/tableUsers';
import Layout from '../../layout/layoutSideBar';
import { useEffect, useState } from 'react';
import Nofound from '../notfound';

const Users = () => {
    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
    }, []);
    return (
        <>
            {state.roles.indexOf('admin') > -1 ? (
                <Layout>
                    <SendUsers />
                    <TableUsers />
                </Layout>
            ) : (
                <Nofound />
            )}
        </>
    );
};

export default Users;

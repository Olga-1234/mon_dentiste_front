import SendCabinet from '../../components/form/SendCabinet';
import TableCabinets from '../../components/Table/tableCabinets';
import Layout from '../../layout/layoutSideBar';
import { useEffect, useState } from 'react';
import Modal from "../../components/Modal/ModalSuccess"
import Nofound from '../notfound';

const index = () => {
    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
    }, []);

    const [modalopen, setModalopen] = useState(false);
	const handleModalopen = () => setModalopen(true);
	const handleModalclose = () => setModalopen(false);
    return (
        <>
            {state.roles.indexOf('admin') > -1 ? (
                <Layout titre={'Cabinet'}>
                    <div className="d-flex row justify-content-center">
                        <SendCabinet   />
                        <TableCabinets />
                
                    </div>
                    <Modal modalopen={modalopen} Handlemodalclose={handleModalclose}/>
                    
                </Layout>
                
            ) : (
                <Nofound />
            )}
        </>
    );
};

export default index;

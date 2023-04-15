import React, { useState, useEffect } from 'react';
import Button from '../../button';
import style from './style.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import config from '../../../config/index';
import Alert from '@mui/material/Alert';
import Button2 from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SendCabinet = ({ handleopenModal }) => {
    const [isSuccess, setIsSuccess] = useState(false);

    const validationSchema = yup.object().shape({
        name: yup.string().required('Le champs Nom du cabinet  est obligatoire'),
        openTime: yup.string().required("Le champs heure d'ouverture est obligatoire"),
        address: yup.string().required('Le champs adresse est obligatoire'),
        closureTime: yup.string().required('Le champs heure de fermeture est obligatoire'),
        city: yup.string().required('Le champs ville est obligatoire'),
        service: yup.string().required('Le champs service est obligatoire'),
        Description: yup.string().required('Le champs description  est obligatoire'),
        phone: yup.string().required('Le champs téléphone est obligatoire'),
        email: yup
            .string()
            .required('Le champs email est obligatoire')
            .email("Le champs email n'est pas valide ")
    });
    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onSubmit' };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = async (data, response) => {
        console.log('les informat', data);
        console.log('les responses', response);

        try {
            console.log(localStorage.getItem('token'), 'hfuehv -fehvhrg');

            const response = await axios
                .post(
                    `${config.api}/cabinet`,
                    { ...data },
                    {
                        headers: {
                            'x-access-token': `${localStorage.getItem('token')}`
                        }
                    }
                )
                .then((res) => {
                    console.log('res ok', res.data);



                    setIsSuccess(true);

                    // return (
                    // <>
                    //     <div
                    //         className="alert alert-warning alert-dismissible fade show"
                    //         role="alert">
                    //         <strong>Holy guacamole!</strong> You should check in on some of
                    //         those fields below.
                    //         <button
                    //             type="button"
                    //             className="close"
                    //             dataDismiss="alert"
                    //             ariaLabel="Close">
                    //             <span ariaHidden="true">&times;</span>
                    //         </button>
                    //     </div>
                    // </>
                    // alert("reussi")

                    // );
                })
                .catch((err) => {
                    console.log('error in request', err);
                });
        } catch (error) {
            console.log('llele', error);
        }
    };
    setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, 1000)

    return (
        <div className={`col-lg-8 row pb-5 g-4 ${style.boxshadow} ${style.respensivepadding}`}>
            <h1 className="h4 d-flex  justify-content-center">
                {' '}
                Formulaire D'enregistrements des Cabinets
            </h1>

            <div className="col-12 d-flex justify-content-center py-5">
                <form
                    className={`col-lg-8 row g-4  ${style.respensivepadding}`}
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.name ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="inputname"
                            placeholder="Nom"
                            name="name"
                            {...register('name', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.name?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="email"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.email ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="inputemail"
                            placeholder="Email"
                            name="email"
                            // ref={register({ required: "This is required." })}
                            {...register('email', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.email?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.openTime ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="openTime"
                            placeholder="heure d'ouverture"
                            name="openTime"
                            {...register('openTime', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.openTime?.message}</div>
                    </div>

                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.closureTime ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="closureTime"
                            placeholder="Heure de fermeture"
                            name="closureTime"
                            {...register('closureTime', { required: false })}
                        />
                        <div className="invalid-feedback ">{errors.closureTime?.message}</div>
                    </div>

                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.phone ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="phone"
                            placeholder="Téléphone"
                            name="phone"
                            {...register('phone', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.phone?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.city ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="city"
                            placeholder="Ville"
                            name="city"
                            {...register('city', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.city?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.address ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="address"
                            placeholder="Adresse"
                            name="address"
                            {...register('address', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.address?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.service ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="service"
                            placeholder="Services"
                            name="service"
                            {...register('service', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.service?.message}</div>
                    </div>

                    <div className="col-md-12">
                        <textarea
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.Description ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="Description"
                            placeholder="Description"
                            name="Description"
                            {...register('Description', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.Description?.message}</div>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                        <Button text="Envoyer" />
                    </div>
                </form>
            </div>

            {isSuccess ?
           
                <>
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Succès!</strong> Le cabinet a été enregistré avec succès.
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </>
                
                :
                <>
                 <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {/* <strong>Succès!</strong> Le cabinet a été enregistré avec succès.
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                        jj
                    </div>
                </>

            }
     {/* {  setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, 1000)} */}

        </div>
    );
};

export default SendCabinet;

/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import rdvdoctor from '../../../assets/rafiki.png';
import Button from '../../button';
import style from './style.module.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCabinet } from '../../../redux';
import { useEffect } from 'react';
import config from '../../../config/index';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const CardAppointment = () => {
    const Cabinets = useSelector((state) => state.Cabinet.cabinets);
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchCabinet()), []);

    const validationSchema = yup.object().shape({
        name: yup.string().required('Le champs Nom du cabinet  est obligatoire'),
        cabinetId: yup.string().required("Le champs heure d'ouverture est obligatoire"),
        date: yup.string().required('Le champs adresse est obligatoire'),
        time: yup.string().required('Le champs heure de fermeture est obligatoire'),
        email: yup
            .string()
            .required('Le champs email est obligatoire')
            .email("Le champs email n'est pas valide ")
    });
    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onSubmit' };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = async (data) => {
        console.log('les informat', { ...data });
        const dd = localStorage.getItem('token');
        console.log('les token', dd);

        try {
            console.log(localStorage.getItem('token'));

            const response = await axios
                .post(
                    `${config.api}/appointment`,
                    { ...data },
                    {
                        headers: {
                            'x-access-token': `${localStorage.getItem('token')}`
                        }
                    }
                )
                .then((res) => {
                    console.log('la reponse', res);
                    return res;
                })
                .catch((err) => {
                    console.log("erreur d'envoi ", err);
                });
        } catch (error) {
            console.log('try catch error : ', error);
        }
    };

    return (
        <div className="py-2 d-flex col-12 container pb-5">
            <div className={`${style.dNone} d-flex justify-content-center col-5  `}>
                <div className={`  pt-5`}>
                    <Image src={rdvdoctor} alt="doctor" height="" width="" />
                </div>
            </div>

            <div className="pt-2 d-flex col-12 col-sm-7 justify-content-center">
                <div className={` py-4 ${style.boxshadow} d-flex justify-content-center`}>
                    <form
                        className={`col-lg-10 row g-4 ${style.respensivepadding}`}
                        onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="h4 d-flex justify-content-center"> Formulaire</h1>

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
                                id="inputEmail4"
                                placeholder="Email"
                                name="email"
                                {...register('email', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.email?.message}</div>
                        </div>

                        <div className="col-12">
                            <select
                                id="inputState"
                                className={`col-12 py-2 bg-light form-control ${style.colorgrid} ${
                                    errors.cabinetId ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                {...register('cabinetId', { required: true })}
                                name="cabinetId">
                                <option selected>Nom du cabinet</option>
                                {Cabinets.map((Cabinet) => (
                                    <option key={Cabinet.id} value={Cabinet.id} option={Cabinet.id}>
                                        {Cabinet.name}
                                    </option>
                                ))}
                            </select>
                            <div className="invalid-feedback ">{errors.cabinetId?.message}</div>
                        </div>

                        <div className="col-md-12">
                            <input
                                type="date"
                                className={`col-12 py-2 bg-light ${style.colorgrid}  form-control ${
                                    errors.date ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="date"
                                placeholder="date"
                                name="date"
                                {...register('date', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.date?.message}</div>
                        </div>
                        <div className="col-md-12">
                            <input
                                type="time"
                                className={`col-12 py-2 bg-light ${style.colorgrid} form-control ${
                                    errors.time ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="time"
                                placeholder="time"
                                min="07:00"
                                max="18:00"
                                name="time"
                                {...register('time', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.time?.message}</div>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <Button text="Envoyer" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardAppointment;

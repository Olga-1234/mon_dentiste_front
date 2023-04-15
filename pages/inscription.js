/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/button';
import style from '../styles/inscription.module.css';
import eye from '../assets/eye.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import config from '../config/index';
import NavBar from '../components/navBar';
import cabinet from '../assets/Mobilelogin.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Eye = <Image src={eye} alt="l'oeil" width="" height="" />;

const inscription = () => {
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const validationSchema = yup.object().shape({
        userfirstName: yup.string().required('Le champs prenom est obligatoire'),
        userName: yup.string().required('Le champs nom est obligatoire'),
        address: yup.string().required('Le champs adresse est obligatoire'),
        sexe: yup.string().required('Le champs sexe est obligatoire'),
        birthdate: yup.string().required('Le champs date de naissance est obligatoire'),
        // cabinets: yup.string().required('Le champs cabinet est obligatoire'),
        // roles: yup.string().required('Le champs role est obligatoire'),
        tel: yup.string().required('Le champs téléphone est obligatoire'),
        email: yup
            .string()
            .required('Le champs email est obligatoire')
            .email("Le champs email n'est pas valide "),
        password: yup
            .string()
            .min(4, 'Le champs mot de passe doit avoir 4 caractère')
            .required('Le champs mot de passe est obligatoire')
    });
    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onSubmit' };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onSubmit' });
    const onSubmit = async (data) => {
        setLoader(true);

        try {
            const msg = await (
                await axios
                    .post(`${config.api}/auth/signUp`, data)
                    .then((res) => {
                        setLoader(false);
                        console.log('res', res.data);
                    })
                    .catch((err) => {
                        setLoader(false);
                        console.log('error in request', err);
                    })
            ).data;

            if (msg) {
                router.push('/');
            }
        } catch (error) {
            console.log('erreur mauvais mot de passe :', error);
        }
    };
    return (
        <div>
            <NavBar />
            <div className={`py-5   d-flex  `}>
                <div className="d-flex py-5 col-7 justify-content-center ">
                    <form
                        className={`col-lg-8 row g-4  ${style.respensivepadding}`}
                        onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-dark  text-center">Inscription</h1>

                        <div className="form-group col-md-12">
                            <input
                                type="text"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.userName ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="inputuserName"
                                placeholder="Nom"
                                name="userName"
                                {...register('userName', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.userName?.message}</div>
                        </div>
                        <div className="col-md-12">
                            <input
                                type="text"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.userfirstName ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="inputuserfirstName"
                                placeholder="Prenom"
                                name="userfirstName"
                                // ref={register({ required: "This is required." })}
                                {...register('userfirstName', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.userfirstName?.message}</div>
                        </div>
                        <div className="col-md-12">
                            <input
                                type="email"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.email ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="email"
                                placeholder="email"
                                name="email"
                                {...register('email', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.email?.message}</div>
                        </div>

                        <div className="col-md-12">
                            <input
                                type="text"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.address ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="inputaddress"
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
                                    errors.sexe ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="sexe"
                                placeholder="sexe"
                                name="sexe"
                                {...register('sexe', { required: true })}
                            />
                            <div className="invalid-feedback ">{errors.sexe?.message}</div>
                        </div>
                        <div className="col-md-12">
                            <input
                                type="date"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.birthdate ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="birthdate"
                                placeholder="Date de Naissance"
                                name="birthdate"
                                {...register('birthdate', { required: true })}
                            />
                        </div>
                        <div className="col-md-12">
                            <input
                                type="number"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.tel ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="tel"
                                placeholder="Téléphone"
                                name="tel"
                                {...register('tel', { required: true })}
                            />
                        </div>

                        <div className="col-md-12">
                            <input
                                type="password"
                                className={`col-12 py-2 bg-light form-control ${
                                    errors.password ? 'is-invalid' : ''
                                } ${style.bordergreen}`}
                                id="password"
                                placeholder="mot de passe"
                                name="password"
                                {...register('password', { required: true })}
                            />
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <Button text="Envoyer" />
                        </div>
                    </form>
                </div>
                <div className=" col-5 d-flex justify-content-center ">
                    <Image text={loader ? '...loading' : 'Envoyer'}  src={cabinet} width={500} height={500} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default inscription;

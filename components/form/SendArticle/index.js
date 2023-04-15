import React, { useState } from 'react';
import Button from '../../button';
import style from './style.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import config from '../../../config/index';

const SendArticle = () => {
    const [value, setValue] = useState('');
    const validationSchema = yup.object().shape({
        title: yup.string().required('Le champs titre  est obligatoire'),
        description: yup.string().required('Le champs description est obligatoire'),
        Name: yup.string().required('Le champs auteur est obligatoire'),
        picture: yup.string().required('Le champs image est obligatoire')
    });
    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onSubmit' };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'aphlns4a');
        return axios.post('https://api.cloudinary.com/v1_1/monaolgita/image/upload', formData);
    };
    const pictureName = register('picture', { required: true });

    const { errors } = formState;

    const onSubmit = async (data) => {
        console.log('les articles', { ...data, picture: 'fufutfut' });
        try {
            console.log(localStorage.getItem('token'), 'hfuehv -fehvhrg ');
            console.log(data.picture);
            const response = await axios
                .post(
                    `${config.api}/article`,
                    { ...data, picture: 'fufutfut' },
                
                    {
                        headers: {
                            'x-access-token': `${localStorage.getItem('token')}`
                        }
                    }
                )
                .then((res) => {
                    console.log('res', res);
                    return res;
                })
                .catch((err) => {
                    console.log('error in request ', err);
                });
        } catch (error) {
            console.log('try catch error : ', error);
        }
    };

    return (
        <form
            className={`col-lg-8 row pb-5 g-4 ${style.boxshadow} ${style.respensivepadding}`}
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h4 d-flex justify-content-center"> Formulaire Article </h1>

            <div className="col-md-12">
                <input
                    type="text"
                    className={`col-12 py-2 bg-light form-control ${
                        errors.title ? 'is-invalid' : ''
                    } ${style.bordergreen}`}
                    id="inputtitle"
                    placeholder="Titre"
                    name="title"
                    {...register('title', { required: true })}
                />
                <div className="invalid-feedback ">{errors.title?.message}</div>
            </div>

            <div className="col-md-12">
                <textarea
                    className={`col-12 py-2 bg-light form-control ${
                        errors.description ? 'is-invalid' : ''
                    } ${style.bordergreen}`}
                    {...register('description', { required: true })}
                    name="description"></textarea>
                <div className="invalid-feedback border border-dark ">
                    {errors.description?.message}
                </div>
            </div>

            <div className="col-md-12">
                <input
                    type="file"
                    className={`col-12 py-2 bg-light ${style.bordergreen}`}
                    id="picture"
                    onBlur={pictureName.onBlur}
                    ref={pictureName.ref}
                    onChange={(event) => {
                        setValue(event.target);
                        uploadImage(event.target.files).then((data) => {
                            console.log(data);
                            pictureName.onChange(event);
                            console.log('test');
                        });
                    }}
                    placeholder="Photo"
                    name="picture"
                    value={value}
                />
                <div className="invalid-feedback border border-dark ">
                    {errors.picture?.message}
                </div>
            </div>
            <div className="col-md-12">
                <input
                    type="text"
                    className={`col-12 py-2 bg-light form-control ${
                        errors.Name ? 'is-invalid' : ''
                    } ${style.bordergreen}`}
                    id="name"
                    placeholder="auteur"
                    name="Name"
                    {...register('Name', { required: true })}
                />
                <div className="invalid-feedback ">{errors.Name?.message}</div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <Button text="Envoyer" />
            </div>
        </form>
    );
};

export default SendArticle;

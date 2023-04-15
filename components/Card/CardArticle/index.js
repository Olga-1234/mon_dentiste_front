/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Child from "../../../assets/articles.svg";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../../redux";
import { useEffect, useState } from 'react';

import Link from "next/link";


const CardArticle = () => {
  const Articles = useSelector((state) => state.Article.articles);
  const dispatch = useDispatch();
  console.log("les articles ", Articles);


  useEffect(
    () => dispatch(fetchArticle()),

    []
  );

  const [token, setToken] = useState('');
  useEffect(() => {
      setToken(localStorage.getItem('token'));
  }, []);

  console.log(token, 'le token navbar');

  const [isAuth, setIsAuth] = useState(token);
  const [deconnect, setDeconnect] = useState(true);
  useEffect(() => {
      setIsAuth(isAuth);
      if (isAuth) {
          setDeconnect(false);
      }
  }, [isAuth]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
      {Articles.map((Article) => (
        <div
          key={Article.id}
          className={` d-flex  pt-5 justify-content-center`}
        >
          <div
            className={`col-lg-9 border d-flex justify-content-center ${style.respensive}`}
          >
            <Image
              src={Child}
              alt="child"
              width=""
              height=""
              className={`col-lg-4  img-fluid py-xs-4`}
            />

            <div className="col-lg-8 py-2 px-3">
              <h2>{Article.title}</h2>
              <p className="pt-1">{Article.description} </p>
            
              <p className="pt-3 fw-bold">{Article.User.userName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArticle;

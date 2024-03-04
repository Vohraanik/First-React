// Card.js
import React from 'react';
import Style from './card.module.css';

const Card = ({ data, docdata }) => {
  console.log(data);
  console.log(docdata);

  return (
    <>
      <div className={Style.card}>
        <h1>Name: {data ? data.name : docdata.name}</h1>
        <h2>Price: {data ? data.price : ''}</h2>
        <h3>Expiry: {data ? data.expiry : ''}</h3>
        <h4>Desc: {data ? data.desc : ''}</h4>
      </div>

      {docdata && (
        <div className={Style.card}>
          <h1>Doctor Name: {docdata.name}</h1>
          <h2>Speciality: {docdata.speciality}</h2>
          <img src={docdata.image} alt="Doctor" />
        </div>
      )}
    </>
  );
};

export default Card;

// Card.js
import React from 'react';
import Style from './card.module.css';

const Card = ({ data, docdata }) => {
  console.log(data);
  console.log(docdata);

  return (
    <div className={Style.card}>
      {data && (
        <>
          <h1>Name: {data.name}</h1>
          <h2>Price: {data.price}</h2>
          <h3>Expiry: {data.expiry}</h3>
          <h4>Desc: {data.desc}</h4>
        </>
      )}

      {docdata && (
        <>
          <h1>Doctor Name: {docdata.name}</h1>
          <h2>Speciality: {docdata.speciality}</h2>
          <img src={docdata.image} alt="Doctor" />
        </>
      )}
    </div>
  );
};

export default Card;

import React from 'react';

function Card({ name, email, id }) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?500x500`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  );
}

export default Card;

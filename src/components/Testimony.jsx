import React from 'react';
import '../stylesheets/Testimony.css';


export function Testimony(props)
{
  return(
    <div className='testimony-container'>
      <img 
        className='testimony-image'
        src={require(`../images/test-${props.image}.jpg`)}
        alt='Foto de yo en un buen momento.'/>
    <div className='testimony-text-container'>
      <p className='testimony-name'>{props.name} de {props.country}</p>
      <p className='testimony-title'>{props.title} at {props.company}</p>
      <p className='testimony-description'>"{props.testimony}"</p>
    </div>
    </div>
  );
}

export default Testimony;


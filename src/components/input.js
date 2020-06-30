import React, { useState } from 'react';
import './styles/input.css';


export default function InputComponent(props) {

  return (
    <>
      <div className='input-component'>
        { 
          props.label ? 
          (
            <b> { props.label } </b>
          ) : null}
        
        <input type='text' placeholder={ props.placeholder ?? ''}/>
      </div>
    </>
  );
};

import React, { useState } from 'react';
import './styles/input.css';
import ClipIcon from '../assets/copy.svg';
import copy from 'copy-to-clipboard';


export default function InputComponent(props) {

  const validation = props.validation ?? null;
  const [ clipboard, setClipboard ] = useState(false);
  let styles = {};

  if (props.value) {
    if (validation === true)
      styles = { backgroundColor: '#e6ffb3' }; 
    else if (validation === false)
      styles = { backgroundColor: '#ffb3b3', color: '#fff' };
  }

  function Clipboard(){
    copy(props.value);
    setClipboard(true);
  };

  return (
    <>
      <div className='input-component'>
        { 
          props.label ? 
          (
            <b> { props.label } </b>
          ) : null}
        
        <input 
          type='text' 
          placeholder={ props.placeholder ?? ''}
          value={ props.value ?? ''}
          readOnly={ props.readOnly ?? false }
          style={ styles }
          onChange={props.onChange}
          />
        {
          props.clipboard ? (
            <img 
              src={ ClipIcon } 
              height={20} width={20} 
              alt="Clipboard icon"
              title="Click to Copy to Clipboard!!!"
              onClick={ () => Clipboard() }
            />
          ) : null
        }

        {
          clipboard ? (
            <center>
              <h3 style={{ color: 'green' }}>Copied to Clipboard!</h3>
            </center>
          ): null
        }
      </div>
    </>
  );
};

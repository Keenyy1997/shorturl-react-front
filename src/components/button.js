import React from 'react';
import ButtonValidate from './validations/button';

export default function ButtonComponent(props) {

  const state = {
    type: props.type ?? 'default',
    disabled: props.disabled ?? false,
    loading: props.loading ?? false,
  };

  function onClickHandler(props) {
    if (state.disabled || state.loading) return;
    else props.onClick();
  }

  const styleButton = ButtonValidate(state);

  return (
    <>
      <button style={styleButton} onClick={() => onClickHandler(props) }>
        { 
          state.loading ? 
          <b>Loading...</b> :
          (props.children ?? 'Empty Button')
        }
      </button>
    </>
  );
}


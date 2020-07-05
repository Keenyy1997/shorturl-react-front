import React from 'react';

export default function TitleComponent(props){

  const titleStyles = {
    fontSize: 46,
    fontFamily: 'Roboto',
    color: props.color ?? 'black',
    textAlign: props.centered ? 'center' : 'left',
  };
  
  return (
    <>
      <h1 style={ titleStyles }>
         { props.children ?? 'Title Example'}
      </h1>
    </>
  );

}

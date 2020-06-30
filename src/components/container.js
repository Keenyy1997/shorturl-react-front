import React from 'react';

/**
 *
 * @param {{ width: number, padding: number, margin: number }} props Props
 */
export default function Container(props) {

  let containerStyles = {
    width: props.width ? `${props.width}%` : '100%',
    padding: props.padding ?? '0',
    margin: props.margin ?? '0',
  };

  return (
    <div className='container-component' style={ containerStyles }>
      { props.children }
    </div>
  );
}

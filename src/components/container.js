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
    marginTop: props.marginTop ?? '0',
    marginBottom: props.marginBottom ?? '0',
    maxWidth: props.maxWidth ?? '100%',
    backgroundColor: props.backgroundColor ?? 'transparent',
    borderRadius: props.radius ?? '0px',
    boxSizing:'border-box',
  };

  return (
    <div className='container-component' style={ containerStyles }>
      { props.children }
    </div>
  );
}

import React from 'react';

export default class Title extends React.Component {
 
  render() {

    const titleStyles = {
      fontSize: 46,
      fontFamily: 'Roboto',
      textAlign: 'left',
      color: this.props.color ?? 'black',
    };
  
    return (
      <>
        <h1 style={ titleStyles }>
           { this.props.children ?? 'Title Example'}
        </h1>
      </>
    );
  }
}

import React from 'react';
import ButtonValidate from './validations/button';


export default class Button extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      type: props.type ?? 'default',
    };
  }
  
  render() {
      
    let styleButton = ButtonValidate(this.state);

    return (
      <>
        <button style={styleButton}>
          { this.props.children ?? 'Empty Button' }
        </button>
      </>
    );
  }
}

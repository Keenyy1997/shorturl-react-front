import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import Container from '../components/container';
import Title from '../components/title';
import Button from '../components/button';

// Icons
import Astronaut from '../assets/astronauta.png';

const ICON_SIZE = 250;

class ErrorView extends React.Component {

  GoHome() {
    this.props.history.push('/');
  }

  render() {
    return (
      <Container width="35" maxWidth="500px" margin="auto">
        <Title color='red' centered>
          URL NOT FOUND
        </Title>


        <center>
          <img 
            src={ Astronaut } 
            width={ ICON_SIZE } height={ ICON_SIZE }
            alt="Astronaut Lost In The Space"/>
          
          <h1 style={{ color: '#fff' }}>
            Houston...<br/>
            We have a problem.
          </h1>
        </center>

        <Button onClick={ () => this.GoHome() }>
          GO BACK
        </Button>
      </Container>
    );
  }
};

export default withRouter(ErrorView);

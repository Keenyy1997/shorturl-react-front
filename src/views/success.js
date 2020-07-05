import React from 'react';
import { withRouter } from 'react-router-dom'

// Components
import Container from '../components/container';
import Title from '../components/title';
import Input from '../components/input';
import Button from '../components/button';
import SuccessIcon from '../assets/success.svg';

// Integrations
import { BASE_URL } from '../integrations/api';

const ICON_SIZE = 160;

class SuccessView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shorterId: 'Unknown',
    }; 
  }

  componentDidMount() {
    
    const IdentifierPath = this.props.match.params.identifier ?? 'Unknown';
    this.setState({
      shorterId: IdentifierPath,
    });
  }

  formatURL() {
      
    const { shorterId } = this.state;

    return `${BASE_URL}/${shorterId}`;
  }

  GoHome() {
    this.props.history.push('/');
  }
  
  render() {
    
    return (
      <Container width="35" maxWidth="500px" margin="auto">
        <Title color="#fff">Make Your URL<br/>Shorter!</Title>

        
        <Container 
            backgroundColor="#fff" padding="1em 1.5em" radius="7.5px">
         
          <center>
            <img 
              src={SuccessIcon} 
              alt='Success Icon' 
              height={ICON_SIZE} width={ICON_SIZE}/>
          </center>

          <Container marginTop="1.5em">
            <Input 
              label='Here is your url'
              readOnly
              clipboard={true}
              value={ this.formatURL() }/>
          </Container>

          <Container marginTop="1em">
            <Button onClick={() => this.GoHome() }>
              Another one!
            </Button>
          </Container>
        </Container>
      </Container>
    );
  };
}

export default withRouter(SuccessView);

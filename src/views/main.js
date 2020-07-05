import React from 'react';

// Components
import Container from '../components/container';
import Title from '../components/title';
import Input from '../components/input';
import Button from '../components/button';

// Validations
import { ValidateURL, ValidateShorterId } from '../components/validations/input';

// Integrations
import { PostRequest } from '../integrations/api';

export default class MainView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      url: '',
      shorterId: '',
      error: '',
    };

    this.onChangeInput = this.onChangeInput.bind(this); 
  }

  onChangeInput(e, target){
    
    if (target === 'url')
      this.setState({ url: e.target.value })
    else if (target === 'shorterId') {
      const InputValue = String(e.target.value).replace(/ /g, '-');
      this.setState({ shorterId: InputValue });
    }
    else
      console.log('Case Not Found!!');
  };

  /**
   * {true | false} status Loading state
   */
  SetLoadingState(status) {
    this.setState({ loading : status })
  }

  ValidateFields(url, shorterId) {
    
    // URL
    if (!url) return { error: 'Url cannot be empty' };
    if (ValidateURL(url) === false) return { error: 'Invalid Url' };
    
    // Shorter Id
    if (shorterId && ValidateShorterId(shorterId) === false) 
      return { error: 'Invalid ShorterId'};

    return true;
  }

  async SubmitForm() {
    const { url, shorterId } = this.state;
    this.setState({ error: '' });

    // Validate Fields
    const isValid = this.ValidateFields(url, shorterId)

    if (isValid !== true)
      return this.setState({ error: isValid.error })
    
    // Loading = True
    this.SetLoadingState(true); 

    // Send Request
    const SendRequest = await PostRequest('', { url, identifier: shorterId }, {})
      .catch((err) => err)
      .finally(() => { this.SetLoadingState(false) });

    const { status, message, shorterUrl } = SendRequest;
    if (status === 200) {
      //Show the success view 
      alert('Url Created:' + shorterUrl);
    } else {
      this.setState({
        error: message,
      })
    }
  }

  render() {

    const { error, url, shorterId } = this.state;

    return (
      <Container 
        width="35" maxWidth="500px" margin="auto">
        <Title color="white">Make Your URL <br/>Shorter!</Title>


        <Container 
            backgroundColor="#fff" padding="1em 1.5em" radius="7.5px">
          <h2>Fill the form</h2>
          
          {
            error ? (
              <Container 
                marginTop="1em" marginBottom="1em" radius="5px"
                padding="2px 10px" backgroundColor="red">
                <h3 style={{ color: 'white' }}>{ error }</h3>
              </Container>
            ): null
          } 
         
          <Container marginTop="3em">
            <Input 
              label="Input your url here" 
              value={ url }
              validation={ ValidateURL(url) }
              onChange={ (e) => this.onChangeInput(e,'url') }/> 
          </Container> 

          <Container width="50" marginTop="1em">
            <Input 
              label="Input your Shorter ID" placeholder="RANDOM"
              value={ shorterId }
              validation={ ValidateShorterId(shorterId) }
              onChange={ (e) => this.onChangeInput(e, 'shorterId') }/>
          </Container>
          
          <Container marginTop="3em" marginBottom="1em">
            <Button 
                onClick={() => this.SubmitForm()}
                loading={this.state.loading} type="primary">
              GENERATE
            </Button>
          </Container>

        </Container>
      </Container>
    );

  }
}

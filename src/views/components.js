import React, { useState } from 'react';
import Button from '../components/button';
import Title from '../components/title';
import Container from '../components/container';
import Input from '../components/input';
import '../App.css';

function ComponentsView() {
  const [ url, setUrl ] = useState('');
  const [ identifier, setIdentifier ] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <h1>My components Table</h1>

        <h3>First Case: Button Generate</h3>
        <Button type='primary'>
          GENERATE
        </Button>

        <br/>

        <h3> Second Case: Title</h3>
        <Title>
          Make your URL<br/>
          shorter!
        </Title>

        <br/>

        <h3> Third Case: Inputs </h3>
        <Input handler={ setUrl } value={ url } label='Input your url here'/> 

        <br/>
        <h3> Fourth Case: Inputs Smaller</h3>
        <Container width={50}>
          <Input 
            handler={ setUrl } 
            value= { url } 
            label='Input the URL Identifier'
            placeholder='RANDOM'
          />
        </Container>
      </header>
    </div>
  );
}

export default ComponentsView;

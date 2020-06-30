import React from 'react';
//import Button from './components/button';
import Title from './components/title';
import Container from './components/container';
import GetWords from './langs';
import './App.css';

const Words = GetWords(localStorage.getItem('lang') ?? 'english'); 

function App() {
  return (
    <div className="App">
      <Container width={60}>
        <Title> { Words } </Title>
      </Container>
    </div>
  );
}

export default App;

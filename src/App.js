import React from 'react';
//import Button from './components/button';
import Title from './components/title';
import Container from './components/container';
import GetWords from './langs';
import './App.css';


function App() {
  
  const { mainTitle } = GetWords(localStorage.getItem('lang') ?? 'english'); 
  console.log(`> Words`, mainTitle); 

  return (
    <div className="App">
      <Container width={60}>
        <Title color='white'> { mainTitle } </Title>
      </Container>
    </div>
  );
}

export default App;

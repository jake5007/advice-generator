import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "./components/Container";
import './styles/App.css';

const App = () => {
  const [ slip, setSlip ] = useState({});

  const getRandomAdvice = async () => {
    await axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        setSlip(res.data.slip);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getRandomAdvice();
  }, []);

  const handleDiceClick = () => {
    getRandomAdvice();
  }

  return (
    <>
      <Container 
        slip={slip}
        onDiceClick={handleDiceClick}
      />
    </>
  );
}

export default App;

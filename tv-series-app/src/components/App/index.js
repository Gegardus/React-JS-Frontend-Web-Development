import React from 'react';
import Main from '../../components/Main/index';
import 'whatwg-fetch';
import './App.css';

const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>TV Series List Today <br /> {getCurrentDate()} </h2>     
      </header>         
       <Main />
    </div>
  );
}

export default App;

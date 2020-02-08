import React , {Component} from 'react';
import theImage1 from './img1.png'
import theImage2 from './img2.png'
import './styleApp.css';
import Container from './Container'

function App() {
  return (
    <div className="App">
       <h1 className="title">My title</h1>
       <img src={theImage1} className="imgs" />
       <img src={theImage2} className="imgs"/>
       <Container/>

    </div>
  );
}

export default App;









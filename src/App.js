import React,{useState} from 'react'
import axios from 'axios'


function App() {

  //const url ='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon} &appid=0ce8672b879fe9fa45f50b6879df9f95'
  return (
    <div className="app">
      <div className="container">
    <div className="top">
      <div className="location">
        <p>Dallas</p>
      </div>
      <div className="temp">
        <h1>60 F</h1>
      </div>
      <div className="description">
        <p>clouds</p>
      </div>
    </div>
    <div className="bottom">
      <div className="feels">
        <p className='bold'>65 F</p>
        <p>feels like</p>
      </div>
      <div className="humidity">
        <p>20c</p>
        <p>humidity</p>
      </div>
      <div className="wind">
        <p className='bold'>12mph</p>
        <p>windspeed</p>
        </div>
      </div>
    </div>
    </div>
      );
}

export default App;

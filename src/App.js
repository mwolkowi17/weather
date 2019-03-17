import React, { Component } from 'react';
import {Wheather} from './Wheather'
import './App.css';


const mainStyle={
  position: 'relative'


}

const Data={
  simpleDay:{
    monday:'Paris',
    tusday:'Warsaw',
    wensday:'Wien',
    thursday: 'Toronto',
    friday: 'Frankfurt',
    saturday: 'Salt Lake City',
    sunday: 'San Francisco'
  },
  simpleTemp:{
    a:'10',
    b:'15',
    c:'20',
    d:'25',
    e:'30'
  },
  simpleSource:{
    a:'./google-weather-icon-1.jpg',
    b:'google-weather-icon-2',
    c:'google-weather-icon-3'
  }

}

class App extends Component {

  state = {
    text: 'Rok dzisiejszy 2019',
    pogoda: '',
    place: '', 
    pogodaWars:'',
    placeWars: '',
    pogodaPar:'',
    placePar:''
  };

  componentDidMount() {
    fetch("http://numbersapi.com/random/year?json")
      .then(res => res.json())
      .then(data =>this.setState({text:data.text}))
      fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=5501cff27ca34f6c5bea44754d534934")
      .then(res=> res.json())
      .then(res=> this.setState({pogoda:res.main.temp}))
      fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5501cff27ca34f6c5bea44754d534934")
      .then(res=> res.json())
       .then(data=>this.setState({place:data.name}))
       fetch("http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&units=metric&APPID=5501cff27ca34f6c5bea44754d534934")
       .then(res=> res.json())
       .then(res=> this.setState({pogodaWars:res.main.temp}))
       fetch("http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&units=metric&APPID=5501cff27ca34f6c5bea44754d534934")
       .then(res=> res.json())
       .then(res=> this.setState({placeWars:res.name}))
       fetch("http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&APPID=5501cff27ca34f6c5bea44754d534934")
       .then(res=> res.json())
       .then(res=> this.setState({pogodaPar:res.main.temp}))
       fetch("http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&APPID=5501cff27ca34f6c5bea44754d534934")
       .then(res=> res.json())
       .then(res=> this.setState({placePar:res.name}))
  }

  render() {
    return (
      <div className="App">
      <div style={mainStyle}>
   
      <div style={{display:'inline-block',
       marginLeft:'auto', 
       marginRight:'auto',
       position:'relative'}}>

        <Wheather day={this.state.place} 
        sourceU={Data.simpleSource.c} 
        temperature={this.state.pogoda} />
        
        
        <Wheather day={this.state.placeWars} 
        sourceU={Data.simpleSource.b} 
        temperature={this.state.pogodaWars} />

        <Wheather day={this.state.placePar} 
        sourceU={Data.simpleSource.c} 
        temperature={this.state.pogodaPar} />

        <Wheather day={Data.simpleDay.sunday} 
        sourceU={Data.simpleSource.b} 
        temperature={Data.simpleTemp.e} />
        
        </div>
         <div>{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export default App;

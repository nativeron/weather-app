import './styles/App.scss';
import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import {Route} from 'react-router-dom'; 
import Card from './components/Card';
import Ciudad from './components/Ciudad';


export default function App() {

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  const [cities, setCities] = useState([]);
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div><Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <hr />
      
    <Route path= '{`/ciudad/${id}`}' component={Card}/>
    <Route
    exact
    path='/ciudad/:ciudadId'
    render={({match}) => <Ciudad
          city={onFilter(match.params.ciudadId)}
        />}
  />

    </div>
    
  );
  
  function onSearch(ciudad) {
    const apiKey= '4ae2636d8dfbdc3044bede63951a019b'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  .then(r => r.json())
  .then((recurso) => {
    if(recurso.main !== undefined){
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: recurso.main.temp,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      setCities(oldCities => [...oldCities, ciudad]);
    } else {
      alert("Ciudad no encontrada");
    }
  });

}
function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id != id));
}



}


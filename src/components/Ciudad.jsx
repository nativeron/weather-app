import React from "react";

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                    {city ? 
                        <div>
                        <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Amount of clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>

                    </div>
                    </div>: <p></p>}
           
        </div>
    )
}
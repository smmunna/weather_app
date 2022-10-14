/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import "../css/realTimeWeather.css";
export default function RealTimeWeather() {

    const [city, setCity] = useState('');
    const [location, setLocation] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9b199144a9msh2c7631e376f6963p122181jsn8fd63afaec68",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=London", options)
    .then((response) => response.json())
    .then((response) => setLocation(response.location))
    .catch((err) => console.error(err));

  return (
    <div>
      {/* Card will show the address and details about country and Temperature */}

        
<div className="input">
    <input type="text" placeholder="Search by city 'Dhaka' " onChange={(e)=>{
        setCity(e.target.value)
    }} required />
    <button onClick={handleSubmit}>Search</button>
</div>

      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{location.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

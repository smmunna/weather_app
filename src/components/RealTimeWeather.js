/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../css/realTimeWeather.css";
import Spinner from "../images/Fidget-spinner.gif";

export default function RealTimeWeather() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState([]);
  const [currentCondition, setCondition] = useState([]);
  const [current, setCurrent] = useState([]);

  const handleSubmit = () => {
    let mycity = city;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9b199144a9msh2c7631e376f6963p122181jsn8fd63afaec68",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${mycity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setLocation(response.location))
      .catch((err) => console.error(err));

    //   Condition
    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${mycity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCondition(response.current.condition))
      .catch((err) => console.error(err));

    //   current
    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${mycity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCurrent(response.current))
      .catch((err) => console.error(err));
  };

  if (current.length === 0) {
    return (
      <div>
        <div className="input">
          <input
            type="text" className="myinput"
            placeholder="Search by city 'Dhaka' "
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          />
          <button className="btn" onClick={handleSubmit}>Search</button>
        </div>
        <div className="spinner">
          <img src={Spinner} alt="Loading.." srcset="" />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Card will show the address and details about country and Temperature */}

      <div className="input">
        <input
          type="text" className="myinput"
          placeholder="Search by city 'Dhaka' "
          onChange={(e) => {
            setCity(e.target.value);
          }}
          required
        />
        <button className="btn" onClick={handleSubmit}>Search</button>
      </div>

      <div class="card">
        <img src={currentCondition.icon} class="card-img-top" alt="..." />{" "}
        <span className="temp_c">{current.temp_c}°C</span>
        <div class="card-body">
          <h5 class="card-title">
            {location.name}, {location.country}
          </h5>
          <h5>Time: {location.localtime}</h5>
          <div>
            {current.is_day === 1 ? (
              <>
                <p className="is_day" style={{color:'green'}}>Day</p>
              </>
            ) : (
              <>
                <p className="is_day" style={{color:'black'}}>Night</p>
              </>
            )}
          </div>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

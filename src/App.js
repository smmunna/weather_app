import './App.css';
import RealTimeWeather from './components/RealTimeWeather';
import Weather from './images/rain.gif'
function App() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="App">
        <h2>Weather Update<sub><a href="https://www.linkedin.com/in/minhazulabedinmunna/">Sm Munna Copyright {year}&copy;</a></sub></h2>
        <img src={Weather} className='w-image' alt="WeatherUpdate" srcset="" />
        <hr />
        <RealTimeWeather/>
    </div>
  );
}

export default App;

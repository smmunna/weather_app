import './App.css';
import RealTimeWeather from './components/RealTimeWeather';
import Weather from './images/rain.gif'
function App() {
  return (
    <div className="App">
        <h2>Weather Update</h2>
        <img src={Weather} className='w-image' alt="WeatherUpdate" srcset="" />
        <hr />
        <RealTimeWeather/>
    </div>
  );
}

export default App;

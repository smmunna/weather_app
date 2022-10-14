import './App.css';
import Weather from './images/rain.gif'
function App() {
  return (
    <div className="App">
        <h2>Weather Update</h2>
        <img src={Weather} className='w-image' alt="WeatherUpdate" srcset="" />
        <hr />
    </div>
  );
}

export default App;

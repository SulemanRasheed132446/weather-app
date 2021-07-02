
import './App.scss';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
//Deploying on heroku
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div >
      <Header />
      <WeatherDetails/>
      </div>
    </Router>
  );
}

export default App;

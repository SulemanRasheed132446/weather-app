
import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';

import {
  BrowserRouter as Router,
  
} from "react-router-dom";
function App() {
  useEffect(() => {
  }, [])
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

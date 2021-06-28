
import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import SearchProgress from './components/SearchProgress';
import WeatherBox from './components/WeatherBox';

function App() {
  useEffect(() => {
  }, [])
  return (
    <div >
     <Header />
     <WeatherDetails/>
    </div>
  );
}

export default App;


import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';

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

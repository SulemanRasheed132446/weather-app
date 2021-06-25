
import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import SearchProgress from './components/SearchProgress';

function App() {
  useEffect(() => {
  }, [])
  return (
    <div >
     <Header />
     <WeatherDetails/>
     <SearchProgress/>
    </div>
  );
}

export default App;

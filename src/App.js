import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [countriesArr, setCountriesArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesArr(response.data);
      })
      .catch((e) => console.log('error getting data from API', e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex justify-content-between">
        <CountriesList countries={countriesArr} />

        <Routes>
          <Route path="/:alpha3Code" element={<CountriesDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

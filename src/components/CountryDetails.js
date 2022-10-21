import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountriesDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((res) => setCountry(res.data))
      .catch((e) => console.log('error getting info from API', e));
  }, [alpha3Code]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/icon/240x180/${country.alpha2Code?.toLowerCase()}.png`}
            alt={country.name?.common}
          />
          <br></br>
          <h1>{country.name?.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders?.map((element, index) => {
                      return (
                        <li style={{ listStyleType: 'none' }} key={index}>
                          <Link to={`/${element}`}>
                            {element}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CountriesDetails;

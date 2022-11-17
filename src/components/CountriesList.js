import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="col-5">
            <div className="list-group">
              <Link
                to={country.alpha3Code}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                />
                {country.name.common}{' '}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountriesList;

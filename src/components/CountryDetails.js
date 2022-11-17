import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const oneCountry = countries.find((country) => {
    return country.alpha3Code === id;
  });
  const lowercased2Code = oneCountry.alpha2Code.toLowerCase();
  const imageURL = `https://flagpedia.net/data/flags/icon/72x54/${lowercased2Code}.png`;
  return (
    <div className="col-7">
      <img src={imageURL} alt="country" />
      <h2>{oneCountry.name.common}</h2>
      <p>Capital: {oneCountry.capital}</p>
      <p>Area: {oneCountry.area}km2</p>
      <p>Borders: </p>
      {oneCountry.borders.map((land) => {
        return (
          <div>
            <Link to={`/${land}`}>{land}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountryDetails;

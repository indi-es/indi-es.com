import cities from 'data/cities.json';

function DatalistCities(props) {
  return (
    <datalist {...props}>
      {cities.map(({ city }, i) => {
        return (
          <option key={`${city}-${i}`} value={city}>
            {city}
          </option>
        );
      })}
    </datalist>
  );
}

export default DatalistCities;

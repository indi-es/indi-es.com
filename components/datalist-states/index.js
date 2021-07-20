import cities from 'data/cities.json';

const states = [...new Set(cities.map(({ admin_name: state }) => state))];

function DatalistStates(props) {
  return (
    <datalist {...props}>
      {states.map((state, i) => {
        return (
          <option key={`${state}-${i}`} value={state}>
            {state}
          </option>
        );
      })}
    </datalist>
  );
}

export default DatalistStates;

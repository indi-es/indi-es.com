import type { ComponentPropsWithoutRef } from 'react';

import cities from 'data/cities.json';

const states = [...new Set(cities.map(({ admin_name: state }) => state))];

function DatalistStates(props: ComponentPropsWithoutRef<'datalist'>) {
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

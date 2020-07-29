import React from 'react';
import SkilledPeople from './SkilledPeople';
import MapDisplay from './MapDisplay';

import { people}  from '../fixtures/peopleData.json';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Skill App</h1>
      <MapDisplay />
      <SkilledPeople people={people[0]}/>
    </div>
  );
}

export default App;

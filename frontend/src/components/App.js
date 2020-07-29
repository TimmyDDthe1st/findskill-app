import React from 'react';
import MapDisplay from './MapDisplay';
import SkilledPeople from './SkilledPeople';

import location from '../fixtures/locationData.json';
import people from '../fixtures/peopleData.json';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Skill App</h1>
      <SkilledPeople people={people}/>
    </div>
  );
}

export default App;

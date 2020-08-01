import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SkilledPeople from './SkilledPeople';
import MapDisplay from './MapDisplay';
import { people}  from '../fixtures/peopleData.json';

import AddSkillForm from './AddSkillForm';

export default function Nav() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Find</Link>
          </li>
          <li>
            <Link to="/addskill">Add Skill</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Find />
          </Route>
          <Route path="/addskill">
            <AddSkill />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Find() {
  return (
    <div>
      <h2>Find Skill</h2>
      <MapDisplay />
      <SkilledPeople people={people[0]}/>
    </div>
  );
}

function AddSkill() {
  return (
    <div>
      <h2>Add Skill</h2>
      <AddSkillForm />
    </div>
  );
}

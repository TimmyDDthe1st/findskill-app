import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SkilledPeople from './SkilledPeople';
import MapDisplay from './MapDisplay';
import { people}  from '../fixtures/peopleData.json';
import getUsers from '../requests/getusers';

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
  const [users, setUsers] = useState();

  useEffect(() => {
      const getData = async () => {
      setUsers(await getUsers());
    } 

    getData();
  }, []);

  {console.log(users)} //start here

  return (
    <div>
      <h2>Find Skill</h2>
      <MapDisplay />
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

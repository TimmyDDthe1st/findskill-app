import React, {useEffect, useState} from 'react';
import { Card } from 'semantic-ui-react';
import SkilledPerson from './SkilledPerson';
import getUsers from '../requests/getusers';

const SkilledPeople = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(getUsers());
  }, [])

  return <Card.Group>
    <SkilledPerson people={console.log(users)}/>
  </Card.Group>
}

export default SkilledPeople

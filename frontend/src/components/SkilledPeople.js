import React from 'react'
import { Card } from 'semantic-ui-react'
import SkilledPerson from './SkilledPerson'

const SkilledPeople = ({ people }) => (
  <Card.Group>
    <SkilledPerson people={people[0]}/>
  </Card.Group>
)

export default SkilledPeople

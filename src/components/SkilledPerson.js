import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
const userImage = require('../images/user.png');

const SkilledPeople = ({ people }) => (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={userImage}
        />
        <Card.Header>{console.log(people)}</Card.Header>
        <Card.Meta>{}</Card.Meta>
        <Card.Description>
          {}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Contact
          </Button>
          <Button basic color='red'>
            Hide
          </Button>
        </div>
      </Card.Content>
    </Card>
)

export default SkilledPeople

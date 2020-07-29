import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const SkilledPeople = ({ name, skill, free, description, location, contactInformation }) => (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='../images/user.png'
        />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{skill}</Card.Meta>
        <Card.Meta>{free}</Card.Meta>
        <Card.Description>
          {description}
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

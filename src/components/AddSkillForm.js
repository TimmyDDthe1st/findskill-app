import React, { useState } from 'react'
import { Input, 
         Button, 
         Checkbox, 
         Form,
} from 'semantic-ui-react';

const AddSkillForm = () => {
  const [nameText, setNameText] = useState();
  const [skillText, setSkillText] = useState();
  const [postcodeText, setPostcodeText] = useState();
  const postcodeRegex = '^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$'


  const handleNameInput = (e) => {
    setNameText(e.target.value);
  }

  const handleSkillInput = (e) => {
    setSkillText(e.target.value);

  }

  const handlePostcodeInput = (e) => {
    const uppcasedInput = e.target.value.toUpperCase();

    if(uppcasedInput.match(postcodeRegex)){
      console.log('make the box green');
    } else {
      console.log('set loading from semantic-ui on each type');
    }

    setPostcodeText(uppcasedInput);

  }

  return <Form>
    <Form.Field>
      <label>Name:</label>
      <Input 
        placeholder="Name..."
        name="name"
        onChange={handleNameInput}
      />
    </Form.Field>
    <Form.Field>
      <label>Skill:</label>
      <Input 
        placeholder="Skill..."
        name="skill"
        onChange={handleSkillInput}
      />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Professional' />
    </Form.Field>
    <Form.Field>
      <label>Postcode:</label>
      <Input 
        placeholder="Postcode..."
        name="postcode"
        onChange={handlePostcodeInput}
      />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
}

export default AddSkillForm

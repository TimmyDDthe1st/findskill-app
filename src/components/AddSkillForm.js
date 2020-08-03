/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import { Input, 
         Button, 
         Checkbox, 
         Form,
         TextArea,
} from 'semantic-ui-react';

const AddSkillForm = () => {
  const [nameText, setNameText] = useState('');
  const [skillText, setSkillText] = useState('');
  const [postcodeText, setPostcodeText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [freeBool, setFreeBool] = useState(false);
  const [professionalBool, setProfessionalBool] = useState(false);
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

  const handleEmailInput = (e) => {   
    const userInput = e.target.value;

    setEmailText(userInput);
  }

  const handleFreeCheckbox = (e) => {
    setFreeBool(e.target.checked);
  }

  const handleProfessionalCheckbox = (e) => {
    setProfessionalBool(e.target.checked);
  }

  const handleFormSubmit = () => {
    const requestParams = [nameText, skillText, postcodeText, emailText, freeBool, professionalBool];

    console.log(requestParams);
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
      <label>Description:</label>
      <br></br>
      <TextArea 
        placeholder="Description..."
        name="description"
      />
    </Form.Field>
    <Form.Field>
      <Checkbox 
        label='Professional'
        onClick={handleProfessionalCheckbox} 
      />
    </Form.Field>
    <Form.Field>
      <Checkbox 
        label='Free' 
        onClick={handleFreeCheckbox}
      />
    </Form.Field>
    <Form.Field>
      <label>Postcode:</label>
      <Input 
        placeholder="Postcode..."
        name="postcode"
        onChange={handlePostcodeInput}
      />
    </Form.Field>
    <Form.Field>
      <label>Email:</label>
      <Input 
        placeholder="Email..."
        name="email"
        onChange={handleEmailInput}
      />
    </Form.Field>
    <Button onClick={handleFormSubmit}>Add Skill</Button>
  </Form>
}

export default AddSkillForm

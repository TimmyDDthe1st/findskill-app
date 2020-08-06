import React from 'react';
import SkilledPerson from './SkilledPerson';

const SkilledPeople = (users) => {
  return (
    <>
      <div className="skilledPersonCard">
        {users.map((user) => (
            <SkilledPerson people={user}/>
          ))}
      </div>
    </>
  );
}

export default SkilledPeople

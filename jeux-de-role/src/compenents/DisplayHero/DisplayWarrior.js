import React from 'react';
import Warrior from '../Hero/Warrior';

const DisplayWarrior = ({ numberOfWarrior }) => {
    return (
    <div>
      <div>
        <p>Nombre de Guerrier: {numberOfWarrior}</p> 
        {/* {warriorStat.map((warrior) => (
          <div className='' key={warrior.name}>
            <p>{warrior.name} : pv = {warrior.pv}</p>
          </div>
        ))} */}
      </div>
    </div>
    );
};

export default DisplayWarrior;
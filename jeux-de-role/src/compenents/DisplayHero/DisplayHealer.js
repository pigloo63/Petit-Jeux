import React from 'react';
import Healer from '../Hero/Healer';

const DisplayHealer = ({ numberOfHeal }) => {
    return (
    <div>
      <div>
        <p>Nombre de Heal: {numberOfHeal}</p> 
        {/* {warriorStat.map((warrior) => (
          <div className='' key={warrior.name}>
            <p>{warrior.name} : pv = {warrior.pv}</p>
          </div>
        ))} */}
      </div>
    </div>
    );
};

export default DisplayHealer;
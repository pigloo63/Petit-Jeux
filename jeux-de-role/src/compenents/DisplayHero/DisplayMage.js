import React from 'react';
import Mage from '../Hero/Mage';

const DisplayMage = ({ numberOfMage }) => {
    return (
    <div>
      <div>
        <p>Nombre de Mage: {numberOfMage}</p> 
        {/* {warriorStat.map((warrior) => (
          <div className='' key={warrior.name}>
            <p>{warrior.name} : pv = {warrior.pv}</p>
          </div>
        ))} */}
      </div>
    </div>
    );
};

export default DisplayMage;
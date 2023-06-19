import React, {useState} from 'react'
import ChoosePlayerAndAttackBlue from './ChoosePlayerAndAttackBlue'
import ChoosePlayerAndAttackRed from './ChoosePlayerAndAttackRed'

const ResolveAttack = ({playersBlue, playersRed}) => {
  
  
  const attack = () => {

    let damageDoneForPlayerBlue = 0
    damageDoneForPlayerBlue = ChoosePlayerAndAttackBlue(playersBlue)
      
    return console.log(damageDoneForPlayerBlue)
  }

  return (
    <div>
      <div>
        <button onClick={() => attack()}>FIGHT !!!</button>
      </div>
    </div>
  )
}

export default ResolveAttack

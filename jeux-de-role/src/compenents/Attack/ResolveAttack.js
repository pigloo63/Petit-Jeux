import React, {useState} from 'react'
import ChoosePlayerAndAttackBlue from './ChoosePlayerAndAttackBlue'
import ChoosePlayerAndAttackRed from './ChoosePlayerAndAttackRed'
import PhysicalDefense from '../Defense/PhysicalDefense'
import MagicalDefense from '../Defense/MagicalDefense'

const ResolveAttack = ({playersBlue, playersRed}) => {
  
  
  const attack = () => {

    let damageDoneForPlayerBlue = 0
    let damageDoneForPlayerRed = 0

    damageDoneForPlayerRed = ChoosePlayerAndAttackRed(playersRed)
    damageDoneForPlayerBlue = ChoosePlayerAndAttackBlue(playersBlue)
      
    return console.log([damageDoneForPlayerBlue, damageDoneForPlayerRed])
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

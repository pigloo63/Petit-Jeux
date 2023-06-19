import { useState } from 'react'
import randomOneToThree from '../Random/randomOneToThree'

function PhysicalAttack (player){

    let randomNumber = 0
    let physicalAttackValue = 0
    
    randomNumber = randomOneToThree(1, 3)

    physicalAttackValue = player.strenghtPower * randomNumber

    console.log(physicalAttackValue)
    return physicalAttackValue

}

export default PhysicalAttack

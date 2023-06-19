// import React, {useEffect, useState} from 'react'
// import warriorMinion from '../images/Order_Minion_Melee_Render.webp'


function Warrior  (numberOfWarrior) {

    let warriorStat = []

    class Warrior {
      constructor(id, pvMax, pv, crit, name, strenghtPower, magicalPower, strenghtDefence, magicalDefense){
        this.id = id
        this.pvMax = pvMax
        this.pv = pv
        this.crit = crit
        this.name = name
        this.strenghtPower = strenghtPower
        this.magicalPower = magicalPower
        this.strenghtDefence = strenghtDefence
        this.magicalDefense = magicalDefense
      }
    }

    
    for(let i=0; i<numberOfWarrior; i++){
      let warrior = new Warrior(i, 600, 600, 10, `warrior${[i+1]}`, 50, 10, 40, 20)
      warriorStat.push(warrior)
    }

  return warriorStat
  
}

export default Warrior
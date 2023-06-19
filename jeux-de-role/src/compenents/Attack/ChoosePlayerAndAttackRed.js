import React from 'react'
import ChooseARandomPlayer from '../Random/ChooseARandomPlayer'
import PhysicalAttack from './PhysicalAttack'
import Warrior from '../Hero/Warrior'
import Mage from '../Hero/Mage'
import Healer from '../Hero/Healer'

export default function ChoosePlayerAndAttackRed(playersRed) {

    let playerWhoPlay = 0
    
    playerWhoPlay = ChooseARandomPlayer(playersRed[0].totalPlayers)
       
    let warriorRed = []
    let mageRed = []
    let healerRed = []
    
    console.log(playerWhoPlay)

    
    if(((0 <= playerWhoPlay) && 
    (playerWhoPlay <= playersRed[0].numberOfWarrior) )){
      warriorRed = Warrior(playersRed[0].numberOfWarrior)

      let warriorAttack = playerWhoPlay-1
      let warriorDamage = 0

      warriorAttack = warriorRed[warriorAttack] 

      warriorDamage = PhysicalAttack(warriorAttack)

      console.log('Je suis un guerrier')

      return warriorDamage
    } 
    else if ((playersRed[0].numberOfWarrior < playerWhoPlay) && 
    (playerWhoPlay <= (playersRed[0].numberOfMage + playersRed[0].numberOfWarrior))) {

      mageRed = Mage(playersRed[0].numberOfMage)
      
      let mageAttack = 0
      let mageDamage = 0

      let chooseMage = 0
      let minMage = 0
      let maxMage = playersRed[0].numberOfMage

      Math.ceil(minMage)
      Math.floor(maxMage)
      chooseMage = Math.floor(Math.random() * (maxMage - minMage) + minMage)

      for(let i=0; i<mageRed.length; i++){
        if(chooseMage === mageRed[i].id){
          mageAttack = mageRed[i]
        }
      }

      mageDamage = PhysicalAttack(mageAttack)

      console.log('je suis un Mage')

      return mageDamage
    } 
    else {

      healerRed = Healer(playersRed[0].numberOfHeal)
      
      let healAttack = 0
      let healDamage = 0

      let chooseHeal = 0
      let minHeal = 0
      let maxHeal = playersRed[0].numberOfHeal

      Math.ceil(minHeal)
      Math.floor(maxHeal)
      chooseHeal = Math.floor(Math.random() * (maxHeal - minHeal) + minHeal)

      for(let i=0; i<healerRed.length; i++){
        if(chooseHeal === healerRed[i].id){
          healAttack = healerRed[i]
        }
      }

      healDamage = PhysicalAttack(healAttack)

      console.log('je suis un Heal')

      return healDamage
   }

}

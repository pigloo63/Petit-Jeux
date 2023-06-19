import React from 'react'
import ChooseARandomPlayer from '../Random/ChooseARandomPlayer'
import PhysicalAttack from './PhysicalAttack'
import Warrior from '../Hero/Warrior'
import Mage from '../Hero/Mage'
import Healer from '../Hero/Healer'

export default function ChoosePlayerAndAttackBlue(playersBlue) {
    console.log(playersBlue[0])
    let playerWhoPlay = 0
    
    playerWhoPlay = ChooseARandomPlayer(playersBlue[0].totalPlayers)
       
    let warriorBlue = []
    let mageBlue = []
    let healerBlue = []
    
    console.log(playerWhoPlay)

    
    if(((0 <= playerWhoPlay) && 
    (playerWhoPlay <= playersBlue[0].numberOfWarrior) )){
      warriorBlue = Warrior(playersBlue[0].numberOfWarrior)

      let warriorAttack = playerWhoPlay-1
      let warriorDamage = 0

      warriorAttack = warriorBlue[warriorAttack] 

      warriorDamage = PhysicalAttack(warriorAttack)

      console.log('Je suis un guerrier')

      return warriorDamage
    } 
    else if ((playersBlue[0].numberOfWarrior < playerWhoPlay) && 
    (playerWhoPlay <= (playersBlue[0].numberOfMage + playersBlue[0].numberOfWarrior))) {

      mageBlue = Mage(playersBlue[0].numberOfMage)
      
      let mageAttack = 0
      let mageDamage = 0

      let chooseMage = 0
      let minMage = 0
      let maxMage = playersBlue[0].numberOfMage

      Math.ceil(minMage)
      Math.floor(maxMage)
      chooseMage = Math.floor(Math.random() * (maxMage - minMage) + minMage)

      for(let i=0; i<mageBlue.length; i++){
        if(chooseMage === mageBlue[i].id){
          mageAttack = mageBlue[i]
        }
      }

      mageDamage = PhysicalAttack(mageAttack)

      console.log('je suis un Mage')

      return mageDamage
    } 
    else {

      healerBlue = Healer(playersBlue[0].numberOfHeal)
      
      let healAttack = 0
      let healDamage = 0

      let chooseHeal = 0
      let minHeal = 0
      let maxHeal = playersBlue[0].numberOfHeal

      Math.ceil(minHeal)
      Math.floor(maxHeal)
      chooseHeal = Math.floor(Math.random() * (maxHeal - minHeal) + minHeal)

      for(let i=0; i<healerBlue.length; i++){
        if(chooseHeal === healerBlue[i].id){
          healAttack = healerBlue[i]
        }
      }

      console.log(chooseHeal)
      console.log(healAttack)
      healDamage = PhysicalAttack(healAttack)

      console.log('je suis un Heal')

      return console.log(healDamage)
   }

}

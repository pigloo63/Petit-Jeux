import React from 'react'
// import healMan from '../images/d8u92nj-e235f992-3f2d-4ac5-a8c6-fa778c489d63.png'


// function healCapacities(randomNumber, healer, personnage) {
  
//   let healValue = 0
//   healValue = healer.magicalPower * randomNumber
  
//   let lifePersonnage = personnage.pv
  
//   if(lifePersonnage < (lifePersonnage/2)){
//     lifePersonnage = healValue + lifePersonnage
//     if(lifePersonnage > personnage.pvMax){
//       lifePersonnage = personnage.pvMax
//     }
//   }
// }

function Healer (numberOfHeal) {

  let healStat = []

  class Heal {
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
  
  for(let i=0; i<numberOfHeal; i++){
    let heal = new Heal(i, 400, 400, 10, `healer${[i+1]}`, 10, 40, 20, 20)
    healStat.push(heal)
  }

  return healStat
}

export default Healer

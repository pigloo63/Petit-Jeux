// import React from 'react'
// import healMan from '../images/d8u92nj-e235f992-3f2d-4ac5-a8c6-fa778c489d63.png'

function Mage (numberOfMage) {

    let mageStat = []

    class Mage  {
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

  for(let i=0; i<numberOfMage; i++){
    let mage = new Mage(i, 450, 450, 10, `mage${[i+1]}`, 25, 60, 20, 40)
    mageStat.push(mage)
    console.log(mage)
  }
    
    console.log(mageStat)
    return mageStat
}

export default Mage
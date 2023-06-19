 /*Fonction qui va distribuer aléatoirement les héros dans les différentes classe
    minHero = 0 
    maxHero = numberOfHeroRed/Blue*/

export default function randomNumberOfHero(minHero, maxHero, setPlayer) {
    
    let numberOfWarrior = 0
    let numberOfMage = 0
    let numberOfHeal = 0
    let totalPlayers = []


    minHero = Math.ceil(minHero)
    maxHero = Math.floor(maxHero)
    numberOfWarrior = Math.floor(Math.random() * (maxHero - minHero))
    totalPlayers.push(numberOfWarrior)

    let rest = maxHero - numberOfWarrior

    if(numberOfWarrior < maxHero){
            minHero = Math.ceil(minHero)
            maxHero = Math.floor(rest)
            numberOfMage = Math.floor(Math.random() * (rest - minHero))
            totalPlayers.push(numberOfMage)
        }

    if(numberOfMage < maxHero){
        numberOfHeal = maxHero - numberOfMage
        totalPlayers.push(numberOfHeal)
    }

    totalPlayers = numberOfHeal + numberOfMage + numberOfWarrior
    totalPlayers = [{numberOfWarrior, numberOfMage, numberOfHeal, totalPlayers}]
    setPlayer(totalPlayers)
    console.log(totalPlayers)


    return [numberOfWarrior, numberOfMage, numberOfHeal, totalPlayers]
}

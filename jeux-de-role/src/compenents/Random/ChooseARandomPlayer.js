import React from 'react'


export default function ChooseARandomPlayer(numberOfPlayers) {
  
  function randomPlayerForAttack(minPlayer, numberOfPlayer) {
    let numberRandom = 0

    minPlayer = Math.ceil(minPlayer)
    numberOfPlayer = Math.floor(numberOfPlayer)
    
    numberRandom = Math.floor(Math.random() * (numberOfPlayer - minPlayer + 1) + minPlayer)
    return numberRandom
  }


  let playerToPlay = 0

  playerToPlay = randomPlayerForAttack(1, numberOfPlayers)

  return playerToPlay 
}

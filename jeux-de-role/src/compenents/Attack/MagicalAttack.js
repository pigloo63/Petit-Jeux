import { useEffect, useState } from 'react'
import randomOneToThree from '../Random/randomOneToThree'


const MagicalAttack = ({personnage}) => {

    const [randomNumberForAttack, setrandomNumberForAttack] = useState(0)
    
    let magicalAttackValue = 0
    
    useEffect(() => {
        randomOneToThree(1, 3, setrandomNumberForAttack)
    }, [])

    magicalAttackValue = personnage.magicalPower + randomNumberForAttack

    return magicalAttackValue
}

export default MagicalAttack
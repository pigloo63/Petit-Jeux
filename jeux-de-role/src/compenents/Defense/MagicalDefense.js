import {useState, useEffect} from 'react'
import MagicalAttack from '../Attack/MagicalAttack';

const MagicalDefense = ({personnage, setLife}) => {
    
    const [attack, setAttack] = useState(0)

    let lifePersonnage = 0

    useEffect(() => {
        MagicalAttack(personnage.magicalPower, setAttack)
    }, [personnage.magicalPower])

    lifePersonnage = personnage.pv - (attack-personnage.magicalDefence)

    return setLife(lifePersonnage)
};

export default MagicalDefense;
import { useEffect, useState} from 'react';
import PhysicalAttack from '../Attack/PhysicalAttack'

const PhysicalDefense = ({personnage, setLife}) => {

    const [attack, setAttack] = useState(0)

    let lifePersonnage = 0

    useEffect(() => {
        PhysicalAttack(personnage.strenghtPower, setAttack)
    }, [personnage.strenghtPower])

    lifePersonnage = personnage.pv - (attack-personnage.strenghtDefence)

    return setLife(lifePersonnage)
}

export default PhysicalDefense;
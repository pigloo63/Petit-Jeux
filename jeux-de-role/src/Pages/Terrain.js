import React, {useEffect, useState} from 'react';
import randomNumberOfHero from '../compenents/Random/randomNumberOfHero';
import Warrior from '../compenents/Hero/Warrior';
import Mage from '../compenents/Hero/Mage';
import Healer from '../compenents/Hero/Healer';
import ResolveAttack from '../compenents/Attack/ResolveAttack';
import DisplayWarrior from '../compenents/DisplayHero/DisplayWarrior';
import DisplayMage from '../compenents/DisplayHero/DisplayMage'
import DisplayHealer from '../compenents/DisplayHero/DisplayHealer'
import '../css/index.css'

const Terrain = () => {

    const [numberHero, setNumberHero] = useState(0)
    const [numberHeroRed, setNumberHeroRed] = useState(0)
    const [numberHeroBlue, setNumberHeroBlue] = useState(0)

    const [playerRed, setPlayerRed] = useState(0)

    const [playerBlue, setPlayerBlue] = useState(0)

    const [displayForm, setDisplayForm] = useState(true)


    const display = () => {
        
        if(numberHero !== 0){
            setDisplayForm(false)
            setNumberHeroBlue(numberHero/2)
            setNumberHeroRed(numberHero/2)
        }
       }

     useEffect(() => {
        randomNumberOfHero(0, numberHeroRed, setPlayerRed)
        randomNumberOfHero(0, numberHeroBlue, setPlayerBlue)
     }, [numberHeroBlue, numberHeroRed])


    return (
        <main>
            {displayForm && <form className='formDisplay'>
                <label>Nombre de Hero désirez</label>
                <input type='number' 
                        id='heroNumber'
                        name='heroNumber' 
                        placeholder='nombre toujours paires' 
                        onChange={(e) => setNumberHero(e.target.value)}>
                </input>
                <button onClick={() => display()}>Valider</button>
            </form>}
            {!displayForm && 
                <div className='container'>
                    <div>
                        <p className='hero'>Nombre de Héro: {numberHero}</p> 
                    </div>
                    <div className='equipe'>
                        <div className='equipeRed'>
                            <p className='numberRed'>Nombre de rouge: {playerRed[0].totalPlayers}</p>
                        </div>
                        <div className='equipeBlue'>
                            <p className='numberBlue'>Nombre de bleu: {playerBlue[0].totalPlayers}</p>
                        </div>
                    </div>
                    <div className='fight'>
                        <div>
                            <DisplayWarrior numberOfWarrior={playerRed[0].numberOfWarrior}/>
                            <DisplayMage numberOfMage={playerRed[0].numberOfMage}/>
                            <DisplayHealer numberOfHeal={playerRed[0].numberOfHeal}/>
                        </div>
                        <div>
                            <DisplayWarrior numberOfWarrior={playerBlue[0].numberOfWarrior}/>
                            <DisplayMage numberOfMage={playerBlue[0].numberOfMage}/>
                            <DisplayHealer numberOfHeal={playerBlue[0].numberOfHeal}/>
                        </div>
                    </div>
                    <div>
                        <ResolveAttack playersBlue={playerBlue} playersRed={playerRed}/>
                    </div>
                </div>}
        </main>
    )
}

export default Terrain
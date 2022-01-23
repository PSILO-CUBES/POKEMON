import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import './Poggers.css'
import HealthBar from './HealthBar'
import { selectPlayerPogger, selectFoePogger } from '../actions'
import { playerCurrPoggerSelector, foeCurrPoggerSelector } from '../reducers/selectHpReducers'

const Pogger = props =>{
    let currPogger = props.currPogger
    let type = props.typePogger
    let name = currPogger.name
    let baseHP = currPogger.hp
    let baseAtk = currPogger.atk
    let baseDef = currPogger.def
    let baseSpd = currPogger.spd
    let idPogger = type

    useEffect(() =>{
        if ( type === 'player' ) {
            playerCurrPoggerSelector(name)
            props.selectPlayerPogger({type, name, baseHP, baseAtk, baseDef, baseSpd, idPogger})
        } else if ( type === 'foe' ) {
            foeCurrPoggerSelector(name)
            props.selectFoePogger({type, name, baseHP, baseAtk, baseDef, baseSpd, idPogger})
        }
        // eslint-disable-next-line
    }, [props.currTurn])

    

    const renderPoggerTurn = props =>{
        if ( props.foeCurrHP === 0 || props.playerCurrHP === 0) {
            if (props.foeCurrHP === 0) {
                return <span className='endMessage' style={{left: '50%'}}>PLAYER WINS!</span>
            } else if (props.playerCurrHP === 0) {
                return <span className='endMessage' style={{left: '50%'}}>FOE WINS!</span>
            }
        } else {
            if (props.currTurn === 'player') {
                return <span className='turn' style={{left: '25%'}}>YOUR TURN!</span>
            } else if (props.currTurn === 'foe') {
                return <span className='turn' style={{left: '75%'}}>FOE'S TURN!</span>
            }
        }
    }

    const renderPogger = () =>{
        if (props.typePogger === 'player') {
            return(
                <>
                    {renderPoggerTurn(props)}
                    <div className='poggerContainer' style={{left:'25%'}}>
                        <div className='statusContainer'>
                            <span className='poggerName'>{props.currPogger.name}</span>
                            <HealthBar currPogger={currPogger} typePogger={type}/>
                        </div>
                        <img className='sprite' alt='monster' src={props.currPogger.sprite} />
                    </div>
                </>
            )         
        } else if (props.typePogger === 'foe') {
            return(
                <>
                    {renderPoggerTurn(props)}
                    <div className='poggerContainer' style={{left:'75%'}}>
                        <div className='statusContainer'>
                            <span className='poggerName'>{props.currPogger.name}</span>
                            <HealthBar currPogger={currPogger} typePogger={type}/>
                        </div>
                        <img className='sprite' alt='monster' src={props.currPogger.sprite} />
                    </div>
                </>
            )
        }
    }
    
    return (
        <>
            {renderPogger()}
        </>
    )
}

const mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,{ selectPlayerPogger, selectFoePogger })(Pogger)
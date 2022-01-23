import React from 'react'
import { connect } from 'react-redux'

import './HealthBar.css'

const HealthBar = props => {
    let currPogger = props.currPogger
    let baseHP = currPogger.hp
    let foeCurrHP = props.foeCurrHP
    let playerCurrHP = props.playerCurrHP
    let currColor
    let hpInPerCent

    const crossProduct = (currHP, baseHP) =>{
        return hpInPerCent = 100 * currHP / baseHP
    }

    const definePlayerOrFoeType = props =>{
        if ( props.typePogger === 'player' ){
            crossProduct(playerCurrHP, baseHP)
        } else if ( props.typePogger === 'foe' ){
            crossProduct(foeCurrHP, baseHP)
        }
    }

    definePlayerOrFoeType(props)

    const changeHPColor = hpInPerCent => { 
        if ( !hpInPerCent ){
            return
        } else {
            if ( hpInPerCent > 50 ){
                return currColor = 'green'
            } else if ( hpInPerCent <= 50 && hpInPerCent >= 25 ){
                return currColor = 'yellow'
            } else if ( hpInPerCent < 25) {
                return currColor = 'red'
            }
        }
        return currColor
    }

    changeHPColor(hpInPerCent)

    if ( !props.foePogger || !props.playerPogger || !props.typePogger ){
        return (
            <div className='healthBarContainer'>
                <div className='healthBar' style={{width: 100 + '%', backgroundColor: `green`}} />
            </div>
        )
    } else if (props.typePogger === 'player') {
        if (props.playerCurrHP <= 0){
            return (
            <div className='healthBarContainer'>
                <div className='healthBar' style={{width: 0 + '%', backgroundColor: `${currColor}`}}>
                    <span className='hpStat'> 0 / {baseHP} </span>
                </div>
            </div>
            )
        } else {
            return (
                <div className='healthBarContainer'>
                    <div className='healthBar' style={{width: hpInPerCent + '%', backgroundColor: `${currColor}`}}>
                        <span className='hpStat'>{playerCurrHP} / {baseHP} </span>
                    </div>
                </div>
            )
        }
    } else if (props.typePogger === 'foe') {
        if (props.foeCurrHP <= 0){
            return (
            <div className='healthBarContainer'>
                <div className='healthBar' style={{width: 0 + '%', backgroundColor: `${currColor}`}}>
                    <span className='hpStat'> 0 / {baseHP} </span>
                </div>
            </div>
            )
        } else {
            return (
                <div className='healthBarContainer'>
                    <div className='healthBar' style={{width: hpInPerCent + '%', backgroundColor: `${currColor}`}}>
                        <span className='hpStat'>{foeCurrHP} / {baseHP} </span>
                    </div>
                </div>
            )
        }
    }
}

const mapStoretoProps = state =>{
    return state
}

export default connect(mapStoretoProps,{})(HealthBar)

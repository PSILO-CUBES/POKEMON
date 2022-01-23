import React from 'react'
import { connect } from 'react-redux'

import './Menu.css'
import MovesList from './MovesList'

const Menu = props => {

    const renderTextBox = props =>{
        if ( !props.selectedMove || !props.playerPogger.name === undefined ){
            return (
                <div className='menu'>
                    <div className='textBox'>
                        <span className='textContent'>Wild Pogger encountered, Please Select A Move.</span>
                    </div>
                    <MovesList />
                </div>
            )
        } else if (props.currTurn === 'foe') {
            return (
                <div className='menu'>
                    <div className='textBox'>
                        <span className='textContent'>{props.playerPogger.name} used {props.selectedMove.moveName}!</span>
                    </div>
                    <MovesList />
                </div>
            )
        } else if (props.currTurn === 'player') {
            return (
                <div className='menu'>
                    <div className='textBox'>
                        <span className='textContent'>{props.foePogger.name} used {props.selectedMove.moveName}!</span>
                    </div>
                    <MovesList />
                </div>
            )
        }
    }

    return (
        <>
            {renderTextBox(props)}
        </>
    )
}

const mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,{})(Menu)

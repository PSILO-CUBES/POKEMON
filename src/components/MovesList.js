import React, {Fragment} from 'react'
import { connect } from 'react-redux'

import './MovesList.css'
import Move from './Move'
import { selectMove } from '../actions'

const MovesList = props => {
    const renderedMoves = props.moves.map(({type, amount, moveName, acc}) => {
        let move = 'MOVE'
        let attackType = type
        return (
            <Fragment key={moveName}>
                <Move type={type} amount={amount} attackMoveName={moveName} acc={acc} move={move} attackType={attackType}/>
            </Fragment>
        )
    })
    
    return (
        <div className='list'>
            {renderedMoves}
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps,{ selectMove })(MovesList)

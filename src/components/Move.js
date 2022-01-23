import React from 'react';
import { connect } from 'react-redux';

import './MovesList.css'
import { selectMove } from '../actions'

const Move = ({move, amount, acc, attackType, selectMove, attackMoveName}) =>{
  return <div className='moves' onClick={() => selectMove({move, amount, attackMoveName, acc, attackType})}>
            <div className='text'>{attackMoveName}</div>
         </div>;
}

const mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,{
    selectMove
})(Move)
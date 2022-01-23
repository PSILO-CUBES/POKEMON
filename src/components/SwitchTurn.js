import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { selectTurn } from '../actions'

export const SwitchTurn = props => {

    const switchTurnsFunction = ({currTurn, selectTurn}) =>{
        const type = 'TURN'
        let newCurrTurn
        if ( currTurn === 'player' ) {
            newCurrTurn = 'foe'
        } else if ( currTurn === 'foe' ) {
            newCurrTurn = 'player'
        }
        selectTurn({type, newCurrTurn}) 
        return
    }

    useEffect(() =>{
        switchTurnsFunction(props)
        // eslint-disable-next-line
    }, [props.selectedMove])

  return <div></div>;
};

const mapStateToProps = state => {
    return state
};


export default connect(mapStateToProps,{ selectTurn })(SwitchTurn);

import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { playerSelectMove, foeSelectMove, selectPlayerPogger, selectFoePogger } from '../actions';

export const DamageCalc = props => {

    useEffect(() =>{
        attackActionChange(props)
        // eslint-disable-next-line
    }, [props.selectedMove])

    const attackActionChange = props =>{
        if ( props.selectedMove === null) {
            return null
        } else {
            let type = props.selectedMove.attackType
            let foeBaseHP = props.foePogger.baseHP
            let foeBaseAtk = props.foePogger.baseAtk
            let foeBaseDef = props.foePogger.baseDef
            let foeBaseSpd = props.foePogger.baseSpd
            let playerBaseHP = props.playerPogger.baseHP
            let playerBaseAtk = props.playerPogger.baseAtk
            let playerBaseDef = props.playerPogger.baseDef
            let playerBaseSpd = props.playerPogger.baseSpd
            let moveAmount = props.selectedMove.amount
            let currTurn = props.currTurn
            if ( props.currTurn === 'player') {
                props.playerSelectMove({type, foeBaseHP, foeBaseAtk, foeBaseDef, foeBaseSpd,
                    playerBaseHP, playerBaseAtk, playerBaseDef, playerBaseSpd, moveAmount, currTurn})
            } else if ( props.currTurn === 'foe') {
                props.foeSelectMove({type, foeBaseHP, foeBaseAtk, foeBaseDef, foeBaseSpd,
                    playerBaseHP, playerBaseAtk, playerBaseDef, playerBaseSpd, moveAmount, currTurn})
            }
            return null
        }
    }

  return <></>;
};

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, { playerSelectMove, foeSelectMove, selectPlayerPogger, selectFoePogger })(DamageCalc);


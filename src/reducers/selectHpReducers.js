import {poggerReducerObject, selectedPlayerPoggerObjectReducer} from './poggerDataReducers'

console.log(selectedPlayerPoggerObjectReducer())

export const playerCurrPoggerSelector = (playerCurrPoggerFunc) =>{
    
}

export const foeCurrPoggerSelector = (foeCurrPoggerFunc) =>{
}

// need to initialize curPoggerObject before bothe HPReducers
export const selectedFoeHPReducer = ( foeCurrHP = poggerReducerObject().HP_Pogger.hp, action ) =>{
    if ( action.type === 'ATTACK' && action.payload.currTurn === 'player' ) {
        return foeCurrHP - ( action.payload.moveAmount + action.payload.playerBaseAtk - action.payload.foeBaseDef )
    } else if ( action.type === 'HEAL' && action.payload.currTurn === 'foe' ) {
        if ( foeCurrHP + action.payload.moveAmount > action.payload.foeBaseHP ){
            return foeCurrHP = action.payload.foeBaseHP
        } else if ( foeCurrHP >= action.payload.foeBaseHP) {
            return foeCurrHP
        } else {
            return foeCurrHP + action.payload.moveAmount
        }
    } else {
        return foeCurrHP 
    }
}

export const selectedPlayerHPReducer = ( playerCurrHP = poggerReducerObject().ATK_Pogger.hp, action ) =>{
    if ( !action ) {
        return null
    } else if ( action.type === 'ATTACK' && action.payload.currTurn === 'foe' ) {
        return playerCurrHP - ( action.payload.moveAmount + action.payload.foeBaseAtk - action.payload.playerBaseDef )
    } else if ( action.type === 'HEAL' && action.payload.currTurn === 'player' ) {
        if ( playerCurrHP + action.payload.moveAmount > action.payload.playerBaseHP ){
            return playerCurrHP = action.payload.playerBaseHP
        } else 
        if ( playerCurrHP >= action.payload.playerBaseHP) {
            return playerCurrHP
        } else {
            return playerCurrHP + action.payload.moveAmount
        }
    } else {
        return playerCurrHP 
    }
}
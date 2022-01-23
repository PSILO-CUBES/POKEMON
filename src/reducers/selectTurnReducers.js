export const selectTurnReducer = ( currTurn = 'foe', action ) =>{
    if ( action.type === 'TURN') {
        return currTurn = action.payload.newCurrTurn
    }
    return currTurn
}
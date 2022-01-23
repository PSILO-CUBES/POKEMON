export const selectedMoveReducer = (selectedMove = null, action) => {
    if ( action.type === 'MOVE' ) {
        return {
            type : action.type,
            moveName: action.payload.moveName,
            amount: action.payload.amount,
            acc: action.payload.acc,
            attackType: action.payload.attackType
        }
    }
    return selectedMove
}
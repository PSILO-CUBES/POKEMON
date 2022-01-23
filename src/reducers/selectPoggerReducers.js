export const selectedPlayerPoggerReducer = (playerPogger = null, action) =>{
    if ( action.type === 'player') {
        return action.payload
    }
    return playerPogger
}

export const selectedFoePoggerReducer = (foePogger = null, action) =>{
    if ( action.type === 'foe') {
        return action.payload
    }
    return foePogger
}
export const selectMove = ({move, amount, attackMoveName, acc, attackType}) =>{
    return {
        type: move,
        payload: {
            amount,
            moveName: attackMoveName,
            acc,
            attackType
        }
    }
}

export const selectPlayerPogger = ({type, name, baseHP, baseAtk, baseDef, baseSpd, idPogger}) =>{
    return {
        type,
        payload: {
            name,
            baseHP,
            baseAtk,
            baseDef,
            baseSpd,
            currTurn: idPogger,
        }
    }
}

export const selectFoePogger = ({type, name, baseHP, baseAtk, baseDef, baseSpd, idPogger}) =>{
    return {
        type,
        payload: {
            name,
            baseHP,
            baseAtk,
            baseDef,
            baseSpd,
            currTurn: idPogger
        }
    }
}

export const playerSelectMove = ({type, foeBaseHP, foeBaseAtk, foeBaseDef, foeBaseSpd,
    playerBaseHP, playerBaseAtk, playerBaseDef, playerBaseSpd, moveAmount, currTurn}) =>{
    return {
        type,
        payload: {
            foeBaseHP,
            foeBaseAtk,
            foeBaseDef,
            foeBaseSpd,
            playerBaseHP,
            playerBaseAtk,
            playerBaseDef,
            playerBaseSpd,
            moveAmount,
            currTurn
        }
    }
}

export const foeSelectMove = ({type, foeBaseHP, foeBaseAtk, foeBaseDef, foeBaseSpd,
    playerBaseHP, playerBaseAtk, playerBaseDef, playerBaseSpd, moveAmount, currTurn}) =>{
    return {
        type,
        payload: {
            foeBaseHP,
            foeBaseAtk,
            foeBaseDef,
            foeBaseSpd,
            playerBaseHP,
            playerBaseAtk,
            playerBaseDef,
            playerBaseSpd,
            moveAmount,
            currTurn
        }
    }
}

export const selectTurn = ({type, newCurrTurn}) =>{
    return {
        type,
        payload: {
            newCurrTurn
        }
    }
}

export const selectPoggerObject = ({typePoggerObject, playerPogger, foePogger}) =>{
    return {
        type: typePoggerObject,
        payload: {
            playerPogger,
            foePogger
        }
    }
}
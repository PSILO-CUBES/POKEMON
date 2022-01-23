import hpPogger from '../images/poggers/hp.png'
import atkPogger from '../images/poggers/atk.png'
import defPogger from '../images/poggers/def.png'
import spdPogger from '../images/poggers/spd.png'

export const movesReducer = () => {
    return [
        { moveName: 'Scrach', amount: 25, acc: 100, type: 'ATTACK' },
        { moveName: 'Bite', amount: 10, acc: 100, type: 'ATTACK' },
        { moveName: 'Sharpen', amount: 0, acc: 100, type: 'STATUS' },
        { moveName: 'Rest', amount: 50, acc: 100, type: 'HEAL' }
    ]
}

export const poggerReducerObject = () => {
    return {
        HP_Pogger: {name: 'HP_Pogger', hp: 200, atk: 50, def: 50, spd: 50, sprite: hpPogger},
        ATK_Pogger: {name: 'ATK_Pogger', hp: 100, atk: 75, def: 50, spd: 50, sprite: atkPogger},
        DEF_Pogger: {name: 'DEF_Pogger', hp: 100, atk: 50, def: 75, spd: 50, sprite: defPogger},
        SPD_Pogger: {name: 'SPD_Pogger', hp: 100, atk: 50, def: 50, spd: 75, sprite: spdPogger}
    }
}

export const selectedPlayerPoggerObjectReducer = ( playerPogger = null, action) =>{
    return null
}   

export const selectedFoePoggerObjectReducer = (foePogger = null, action) =>{
    return null
}

export const currPoggersReducerObject = () =>{
    return null
}
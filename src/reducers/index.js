import { combineReducers } from 'redux'

import { movesReducer, poggerReducerObject, selectedPlayerPoggerObjectReducer, selectedFoePoggerObjectReducer} from './poggerDataReducers'
import { selectedPlayerPoggerReducer, selectedFoePoggerReducer} from './selectPoggerReducers'
import { selectedMoveReducer } from './selectMoveReducers'
import { selectedFoeHPReducer, selectedPlayerHPReducer } from './selectHpReducers'
import { selectTurnReducer } from './selectTurnReducers'

export default combineReducers({
    moves: movesReducer,
    poggers: poggerReducerObject,
    currTurn: selectTurnReducer,
    selectedMove: selectedMoveReducer,
    playerPogger: selectedPlayerPoggerReducer,
    playerPoggerObject: selectedPlayerPoggerObjectReducer,
    foePogger: selectedFoePoggerReducer,
    foePoggerObject: selectedFoePoggerObjectReducer,
    foeCurrHP: selectedFoeHPReducer,
    playerCurrHP: selectedPlayerHPReducer
})
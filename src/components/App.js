import { connect } from 'react-redux';

import './App.css'
import React from "react";
import Pogger from "./Pogger";
import Menu from "./Menu";
import TurnHandler from './TurnHandler';


const App = props =>{
  console.log(props)
  return (
    <div className="App">
      <Menu />
      <Pogger currPogger={props.poggers.HP_Pogger} typePogger={'player'}/>
      <Pogger currPogger={props.poggers.DEF_Pogger} typePogger={'foe'}/>
      <TurnHandler />
    </div>
  );
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

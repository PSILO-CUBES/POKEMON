import React from 'react';
import { connect } from 'react-redux';

import DamageCalc from './DamageCalc'
import SwitchTurn from './SwitchTurn';

export const TurnHandler = props => {
  return (
      <>
        <DamageCalc />
        <SwitchTurn />
      </>
  );
};

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps,{})(TurnHandler);

/*
 *
 * Keeper reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import { createActions } from 'reduxsauce';
export const initialState = fromJS({});

export const { Types: keeperTypes, Creators: keeperCreators } = createActions({
  setStage: ['stage'],
  setPlayers: ['payload'],
  setPlayerAScore: ['payload'],
  setPlayerBScore: ['payload'],
  clearPlayersData: [],
  clearScore: []
});

/* eslint-disable default-case, no-param-reassign */
export const keeperReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case keeperTypes.SET_STAGE:
        return state.set('stage', action.stage);
      case keeperTypes.SET_PLAYERS:
        return state.set('playerA', action.payload.playerA).set('playerB', action.payload.playerB);
      case keeperTypes.SET_PLAYER_A_SCORE:
        return state.set('playerAScore', action.payload);
      case keeperTypes.SET_PLAYER_B_SCORE:
        return state.set('playerBScore', action.payload);
      case keeperTypes.CLEAR_PLAYERS_DATA:
        return state
          .set('playerAScore', 0)
          .set('playerBScore', 0)
          .set('playerA', '')
          .set('playerB', '')
          .set('stage', 1);
      case keeperTypes.CLEAR_SCORE:
        return state.set('playerAScore', 0).set('playerBScore', 0);

      default:
        return state;
    }
  });

export default keeperReducer;

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import get from 'lodash/get';

/**
 * Direct selector to the keeper state domain
 */

const selectKeeperDomain = (state) => (state.Keeper || initialState).toJS();

const makeSelectKeeper = () => createSelector(selectKeeperDomain, (substate) => substate);
export const selectPlayers = () =>
  createSelector(selectKeeperDomain, (substate) => {
    return {
      playerA: get(substate, 'playerA'),
      playerB: get(substate, 'playerB')
    };
  });
export const selectStage = () => createSelector(selectKeeperDomain, (substate) => get(substate, 'stage', 1));
export const selectPlayerAScore = () =>
  createSelector(selectKeeperDomain, (substate) => get(substate, 'playerAScore', 0));
export const selectPlayerBScore = () =>
  createSelector(selectKeeperDomain, (substate) => get(substate, 'playerBScore', 0));

export default makeSelectKeeper;
export { selectKeeperDomain };

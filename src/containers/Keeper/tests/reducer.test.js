import { fromJS } from 'immutable';
import { keeperReducer, keeperTypes, initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Keeper reducer tests', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(keeperReducer(undefined, {})).toEqual(state);
  });
  it('should return the update the state when an action of type SET_STAGE is dispatched', () => {
    const expectedResult = fromJS(state.toJS()).set('stage', 2);
    expect(
      keeperReducer(state, {
        type: keeperTypes.SET_STAGE,
        stage: 2
      })
    ).toEqual(expectedResult);
  });
  it('should return the update the state when an action of type SET_PLAYERS is dispatched', () => {
    const expectedResult = fromJS(state.toJS()).set('playerA', 'Thor').set('playerB', 'Thunder');
    expect(
      keeperReducer(state, {
        type: keeperTypes.SET_PLAYERS,
        payload: {
          playerA: 'Thor',
          playerB: 'Thunder'
        }
      })
    ).toEqual(expectedResult);
  });
  it('should return the update the state when an action of type SET_PLAYER_A_SCORE is dispatched', () => {
    const expectedResult = fromJS(state.toJS()).set('playerAScore', 2);
    expect(
      keeperReducer(state, {
        type: keeperTypes.SET_PLAYER_A_SCORE,
        payload: 2
      })
    ).toEqual(expectedResult);
  });
  it('should return the update the state when an action of type SET_PLAYER_B_SCORE is dispatched', () => {
    const expectedResult = fromJS(state.toJS()).set('playerBScore', 2);
    expect(
      keeperReducer(state, {
        type: keeperTypes.SET_PLAYER_B_SCORE,
        payload: 2
      })
    ).toEqual(expectedResult);
  });
  it('should return the update the state when an action of type CLEAR_PLAYERS_DATA is dispatched', () => {
    const expectedResult = fromJS(state.toJS())
      .set('playerAScore', 0)
      .set('playerBScore', 0)
      .set('playerA', '')
      .set('playerB', '')
      .set('stage', 1);
    expect(
      keeperReducer(state, {
        type: keeperTypes.CLEAR_PLAYERS_DATA
      })
    ).toEqual(expectedResult);
  });
  it('should return the update the state when an action of type CLEAR_SCORE is dispatched', () => {
    const expectedResult = fromJS(state.toJS()).set('playerAScore', 0).set('playerBScore', 0);
    expect(
      keeperReducer(state, {
        type: keeperTypes.CLEAR_SCORE
      })
    ).toEqual(expectedResult);
  });
});

import { fromJS } from 'immutable';
import { selectKeeperDomain, selectPlayers, selectStage, selectPlayerAScore, selectPlayerBScore } from '../selectors';

describe('Keeper selector tests', () => {
  let mockedState;
  const playerA = 'Thor';
  const playerB = 'Thunder';

  const stage = 2;
  const playerAScore = 9;
  const playerBScore = 10;
  beforeEach(() => {
    mockedState = {
      Keeper: fromJS({
        playerA,
        playerB,
        stage,
        playerAScore,
        playerBScore
      })
    };
  });

  it('should select the user state', () => {
    expect(selectKeeperDomain(mockedState)).toEqual(mockedState.Keeper.toJS());
  });
  it('should select the loding state', () => {
    const selector = selectPlayers();
    expect(selector(mockedState)).toEqual({ playerA, playerB });
  });
  it('should select the stage state', () => {
    const selector = selectStage();
    expect(selector(mockedState)).toEqual(stage);
  });
  it('should select the playerAScore state', () => {
    const selector = selectPlayerAScore();
    expect(selector(mockedState)).toEqual(playerAScore);
  });
  it('should select the playerBScore state', () => {
    const selector = selectPlayerBScore();
    expect(selector(mockedState)).toEqual(playerBScore);
  });
});

/**
 *
 * Keeper
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form } from 'antd';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';

import { isUserNameValid } from '../../utils/validationUtils';
import makeSelectKeeper, { selectPlayers, selectStage, selectPlayerAScore, selectPlayerBScore } from './selectors';
import { colors, media, fonts } from '../../themes';
import { keeperCreators } from './reducer';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const SketchyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 3px solid ${colors.dark1};
  width: 75%;
  height: 85%;
  border-radius: 4% 12% 10% 8% / 3% 3% 6% 10%;
  background: #ffffff;
  position: relative;
  padding: 0 1rem;
  ${media.desktop.min(`
    width: 40%;
    height: 85%;
  `)}
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  ${(props) => (props.center ? `justify-content: center;` : 'justify-content: space-between;')};

  align-items: center;
`;
const CustomForm = styled(Form)`
  text-align: center;
  width: 100%;
  padding: 1rem;
  .ant-legacy-form-explain {
    margin-top: 0.5rem;
    color: red;
    ${fonts.size.small()};
  }
  & .ant-form-item-explain,
  & .ant-form-item-extra {
    text-align: left;
    color: red;
    font-size: 0.65rem;
  }
`;
const CustomTitle = styled.p`
  text-transform: uppercase;
  ${fonts.style.heading}
  margin: 0;
`;
const CustomBigName = styled.p`
  text-transform: capitalize;
  font-weight: 300;
  ${fonts.size.big()}
  margin: 0;
`;
const CustomLargeText = styled.p`
  text-transform: capitalize;
  font-weight: 300;
  ${fonts.size.large()}
  margin: 0;
`;
const CustomXLargeText = styled.p`
  text-transform: capitalize;
  font-weight: 300;
  ${fonts.size.extraLarge()}
  margin: 0;
`;
const CustomSmallText = styled.p`
  font-weight: 300;
  ${fonts.size.small()}
  margin: 0;
`;
export function Keeper({
  dispatchSetPlayers,
  dispatchSetStage,
  dispatchSetPlayerAScore,
  dispatchSetPlayerBScore,
  dispatchClearPlayersData,
  dispatchClearScore,
  players,
  stage,
  playerAScore,
  playerBScore
}) {
  const [playerForm] = Form.useForm();
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    if (playerAScore === 11 || playerBScore === 11) {
      setGameOver(true);
    }
  }, [playerAScore, playerBScore]);

  const handleContinue = async () => {
    try {
      await playerForm.validateFields();
      const data = playerForm.getFieldsValue();
      dispatchSetPlayers(data);
      dispatchSetStage(2);
      playerForm.resetFields();
    } catch (error) {}
  };
  const currentWinner = () => {
    if (!playerAScore && !playerBScore) {
      return 'No one';
    } else if (playerAScore === playerBScore) {
      return "It's a tie";
    }
    return playerAScore > playerBScore ? players.playerA : players.playerB;
  };
  return (
    <Wrapper>
      <SketchyContainer>
        <CustomTitle>The Keeper</CustomTitle>
        {stage === 1 && (
          <CustomForm form={playerForm}>
            <Form.Item name="playerA" rules={isUserNameValid('Username is required!', 'Invalid Username!')}>
              <CustomInput width={80} data-testid="input" placeholder="Player A" />
            </Form.Item>

            <Form.Item name="playerB" rules={isUserNameValid('Username is required!', 'Invalid Username!')}>
              <CustomInput width={80} data-testid="input" placeholder="Player B" />
            </Form.Item>
            <CustomButton width={85} onClick={handleContinue} data-testid="btn">
              Continue
            </CustomButton>
          </CustomForm>
        )}
        {stage === 2 && (
          <>
            <Row>
              <CustomBigName>{players.playerA}</CustomBigName>
              <CustomButton
                width={25}
                disabled={gameOver}
                onClick={() => {
                  dispatchSetPlayerAScore(playerAScore + 1);
                }}
              >
                Add Win
              </CustomButton>
            </Row>
            <Row center>
              <CustomSmallText>Wins:</CustomSmallText>
              <CustomXLargeText>{playerAScore}</CustomXLargeText>
            </Row>
            <Row>
              <CustomBigName>{players.playerB}</CustomBigName>
              <CustomButton width={25} disabled={gameOver} onClick={() => dispatchSetPlayerBScore(playerBScore + 1)}>
                Add Win
              </CustomButton>
            </Row>
            <Row center>
              <CustomSmallText>Wins:</CustomSmallText>
              <CustomXLargeText>{playerBScore}</CustomXLargeText>
            </Row>
            <hr />
            <Row>
              <CustomSmallText>Current Winner</CustomSmallText>
              <CustomLargeText>{currentWinner()}</CustomLargeText>
            </Row>
            <Row>
              <CustomSmallText>Win Difference: {Math.abs(playerAScore - playerBScore)}</CustomSmallText>
            </Row>
            {gameOver && (
              <Row>
                <CustomButton
                  width={45}
                  onClick={() => {
                    setGameOver(false);
                    dispatchClearScore();
                  }}
                >
                  Play Again
                </CustomButton>
                <CustomButton
                  width={45}
                  onClick={() => {
                    setGameOver(false);
                    dispatchClearPlayersData();
                  }}
                >
                  Start Over
                </CustomButton>
              </Row>
            )}
          </>
        )}
      </SketchyContainer>
      <GlobalStyle />
    </Wrapper>
  );
}

Keeper.propTypes = {
  dispatchSetPlayers: PropTypes.func,
  dispatchSetStage: PropTypes.func,
  players: PropTypes.object,
  stage: PropTypes.number,
  playerAScore: PropTypes.number,
  playerBScore: PropTypes.number,
  dispatchSetPlayerAScore: PropTypes.func,
  dispatchSetPlayerBScore: PropTypes.func,
  dispatchClearPlayersData: PropTypes.func,
  dispatchClearScore: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  keeper: makeSelectKeeper(),
  players: selectPlayers(),
  stage: selectStage(),
  playerAScore: selectPlayerAScore(),
  playerBScore: selectPlayerBScore()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetPlayers: (data) => {
      dispatch(keeperCreators.setPlayers(data));
    },
    dispatchSetStage: (data) => {
      dispatch(keeperCreators.setStage(data));
    },
    dispatchSetPlayerAScore: (data) => {
      dispatch(keeperCreators.setPlayerAScore(data));
    },
    dispatchSetPlayerBScore: (data) => {
      dispatch(keeperCreators.setPlayerBScore(data));
    },
    dispatchClearPlayersData: () => {
      dispatch(keeperCreators.clearPlayersData());
    },
    dispatchClearScore: () => {
      dispatch(keeperCreators.clearScore());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Keeper);

export const KeeperTest = compose()(Keeper);

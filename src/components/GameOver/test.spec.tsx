import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import GameOver from '.';
import store from 'store/store';

describe('GameOver Component', () => {
  it('should render the game over modal', () => {
    const handleStartGame = jest.fn();
    const setOpenStartGame = jest.fn();
    const score = 10;

    const { getByTestId } = render(
      <Provider store={store}>
        <GameOver
          handleStartGame={handleStartGame}
          setOpenStartGame={setOpenStartGame}
          score={score}
        />
      </Provider>,
    );

    const content = getByTestId('game-over-modal');

    expect(content).toBeDefined();
    expect(content).toHaveTextContent('Game Over');
    expect(content).toHaveTextContent(score.toString());
  });

  it('should handle the restart game button', () => {
    const handleStartGame = jest.fn();
    const setOpenStartGame = jest.fn();
    const score = 10;
    const nickname = 'testName';

    const { getByText } = render(
      <Provider store={store}>
        <GameOver
          handleStartGame={() => handleStartGame(nickname)}
          setOpenStartGame={setOpenStartGame}
          score={score}
        />
      </Provider>,
    );

    const button = getByText('Restart');
    fireEvent.click(button);

    expect(handleStartGame).toHaveBeenCalled();
    expect(handleStartGame).toHaveBeenCalledWith(nickname);
  });

  it('should handle the exit game button', () => {
    const handleStartGame = jest.fn();
    const setOpenStartGame = jest.fn();
    const score = 10;

    const { getByText } = render(
      <Provider store={store}>
        <GameOver
          handleStartGame={handleStartGame}
          setOpenStartGame={setOpenStartGame}
          score={score}
        />
      </Provider>,
    );

    const button = getByText('Exit');
    fireEvent.click(button);

    expect(setOpenStartGame).toHaveBeenCalled();
    expect(setOpenStartGame).toHaveBeenCalledWith(true);
  });
});

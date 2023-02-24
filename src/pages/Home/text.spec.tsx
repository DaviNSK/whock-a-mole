import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from 'store/store';
import HomePage from './';

describe('HomePage', () => {
  it('should render start game button on initial render', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    const startGameButton = screen.getByRole('button', { name: /Start/i });

    expect(startGameButton).toBeInTheDocument();
  });

  it('should start game when start button is clicked', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    const startGameButton = screen.getByRole('button', { name: /Start/i });

    userEvent.click(startGameButton);

    const stopWatchTitle = screen.getByText('Your time:');

    expect(stopWatchTitle).toBeInTheDocument();
  });

  it('should display score and mole items when game is running', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    const startGameButton = screen.getByRole('button', { name: /Start/i });

    userEvent.click(startGameButton);

    const score = screen.getByText(/score:/i);
    const moleItems = screen.getAllByTestId('mole-and-hole');

    expect(score).toBeInTheDocument();
    expect(moleItems).toHaveLength(12);
  });
});

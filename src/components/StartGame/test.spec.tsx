import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import StartGame from './';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('StartGame', () => {
  test('should render the StartGame component', () => {
    (useSelector as jest.Mock).mockReturnValue('test nickname');
    const mockHandleStartGame = jest.fn();
    render(<StartGame handleStartGame={mockHandleStartGame} />);

    const titleElement = screen.getByText(/start game/i);
    expect(titleElement).toBeInTheDocument();

    const inputElement = screen.getByTestId(
      'input-nickname',
    ) as HTMLInputElement;
    expect(inputElement.value).toBe('test nickname');

    const startButtonElement = screen.getByRole('button', { name: /start/i });
    expect(startButtonElement).toBeInTheDocument();
    // expect(startButtonElement).toBeDisabled()
    // expect(startButtonElement).toHaveProperty('disabled', true);

    fireEvent.change(inputElement, { target: { value: 'player1' } });
    expect(startButtonElement).toBeEnabled();

    fireEvent.click(startButtonElement);
    expect(mockHandleStartGame).toHaveBeenCalledTimes(1);
    expect(mockHandleStartGame).toHaveBeenCalledWith('player1');
  });
});

import { render, fireEvent } from '@testing-library/react';
import Hammer from './';

describe('Hammer component', () => {
  test('renders hammer image', () => {
    const { getByAltText } = render(
      <Hammer activeHammer={false} setActiveHammer={() => {}} />,
    );

    const hammerImage = getByAltText('hammer image');

    expect(hammerImage).toBeInTheDocument();
  });

  test('sets activeHammer to true on click', () => {
    const setActiveHammer = jest.fn();

    const { getByAltText } = render(
      <Hammer activeHammer={false} setActiveHammer={setActiveHammer} />,
    );

    const hammerImage = getByAltText('hammer image');
    fireEvent.click(hammerImage);

    expect(setActiveHammer).toHaveBeenCalledWith(true);
  });

  test('sets activeHammer to false after 150ms', () => {
    jest.useFakeTimers();
    const setActiveHammer = jest.fn();

    render(<Hammer activeHammer={true} setActiveHammer={setActiveHammer} />);

    jest.runAllTimers();
    expect(setActiveHammer).toHaveBeenCalledWith(false);
  });
});

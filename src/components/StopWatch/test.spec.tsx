import { render } from '@testing-library/react';
import parseTime from 'utils/parseTime';
import sleep from 'utils/sleep';
import StopWatch from './';

describe('StopWatch component', () => {
  let time = 120000;
  const setTime = jest.fn();
  let running = true;

  beforeEach(() => {
    setTime.mockClear();
  });

  test('renders the component', () => {
    const { getByTestId } = render(
      <StopWatch time={time} setTime={setTime} running={running} />,
    );

    expect(getByTestId('stopwatch')).toBeInTheDocument();
  });

  test('updates the time every 10 milliseconds when running', async () => {
    render(<StopWatch time={time} setTime={setTime} running={running} />);

    expect(setTime).toHaveBeenCalledTimes(1);

    await sleep(10);

    expect(setTime).toHaveBeenCalledTimes(3);
  });

  test('does not update the time when not running', () => {
    jest.useFakeTimers();

    render(<StopWatch time={time} setTime={setTime} running={false} />);

    expect(setTime).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(setTime).not.toHaveBeenCalled();

    jest.useRealTimers();
  });

  test('displays the formatted time', () => {
    time = 360100;

    const { getByTestId } = render(
      <StopWatch time={time} setTime={setTime} running={running} />,
    );

    const timeElement = getByTestId('stopwatch');
    expect(timeElement.textContent).toEqual(`Your time:${parseTime(time)}`);
  });
});

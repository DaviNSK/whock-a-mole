import { render } from '@testing-library/react';
import MoleAndHole from './';

describe('MoleAndHole component', () => {
  test('renders points and hole image', () => {
    const points = 10;

    const { getByText, getByAltText } = render(
      <MoleAndHole points={points} activeMole={false} hitMole={false} />,
    );

    const pointsElement = getByText(points.toString());
    const holeImage = getByAltText('hole image');

    expect(pointsElement).toBeInTheDocument();
    expect(holeImage).toBeInTheDocument();
  });

  test('renders mole image when activeMole is true', () => {
    const points = 10;

    const { getByAltText } = render(
      <MoleAndHole points={points} activeMole={true} hitMole={false} />,
    );
    
    const moleImage = getByAltText('mole image');
    expect(moleImage).toBeInTheDocument();
  });

  test('does not render mole image when hitMole is true', () => {
    const points = 10;

    const { queryByAltText } = render(
      <MoleAndHole points={points} activeMole={true} hitMole={true} />,
    );
    
    const moleImage = queryByAltText('mole image');
    expect(moleImage).not.toBeInTheDocument();
  });
});

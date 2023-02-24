import { render } from '@testing-library/react';
import UserRanking from './';

const dataList = [
  { nickname: 'user1', score: 10 },
  { nickname: 'user2', score: 20 },
  { nickname: 'user3', score: 15 },
];

describe('UserRanking', () => {
  it('should render the component', () => {
    const { getByText } = render(<UserRanking dataList={dataList} />);

    expect(getByText('Ranking')).toBeInTheDocument();
  });

  it('should display the top 3 users based on their score', () => {
    const { getByText } = render(<UserRanking dataList={dataList} />);

    expect(getByText('#1 user2')).toBeInTheDocument();
    expect(getByText('#2 user3')).toBeInTheDocument();
    expect(getByText('#3 user1')).toBeInTheDocument();
  });
});

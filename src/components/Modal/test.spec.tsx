import { render } from '@testing-library/react';
import Modal from './';

describe('Modal component', () => {
  test('renders children', () => {
    const { getByText } = render(
      <Modal>
        <div>Test Modal</div>
      </Modal>,
    );
    const modalContent = getByText('Test Modal');
    expect(modalContent).toBeInTheDocument();
  });
});

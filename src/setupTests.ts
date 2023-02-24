// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ??
  function () {
    return {
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
  };

window.IntersectionObserver =
  window.IntersectionObserver ??
  function () {
    return {
      observe: jest.fn(),
      disconnect: jest.fn(),
    };
  };

window.URL.createObjectURL = jest.fn();
window.scrollTo = jest.fn();

Object.defineProperty(global.navigator, 'geolocation', {
  value: {
    clearWatch: jest.fn(),
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  },
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));

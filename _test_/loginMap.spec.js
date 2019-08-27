import { mapStateToProps } from '../src/components/LoginForm';

const state = {
  loginUser: jest.fn(),
  errors: [],
  errorMessage: '',
  history: {},
  loading: false,
  loadingSuccess: true,
  success: true,
};

describe('mapStateToProps', () => {
  it('return the right object', () => {
    expect(mapStateToProps(state)).toBeDefined();
  });
});

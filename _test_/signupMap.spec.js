import { mapStateToProps } from '../src/components/SignupForm';

const state = {
  auth: {},
  errors: [],
  loading: false,
  loadingSuccess: true,
  success: true,
};

describe('mapStateToProps', () => {
  it('return the right object', () => {
    expect(mapStateToProps(state)).toBeDefined();
  });
});

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { LoginForm } from '../src/components/LoginForm';

describe('About', () => {
  let component;

  const props = {
    email: '',
    password: '',
    loginUser: jest.fn(),
    errors: [],
    errorMessage: '',
    history: {},
    loading: false,
    loadingSuccess: true,
    open: false,
  };

  beforeEach(() => {
    component = shallow(<LoginForm {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('should change firstName value when changeValueHandler is called', () => {
    const event = {
      target: {
        value: 'This is to test for email change',
        name: 'email',
      },
    };
    component.instance().changeValueHandler(event);
    const { email } = component.state();
    expect(email).toEqual(event.target.value);
  });

  it('should call the right function on form submission', () => {
    component.instance().onSubmit({ preventDefault: jest.fn() });
    expect(props.loginUser).toHaveBeenCalledTimes(1);
    component.setProps({ errorMessage: 'Invalid email address' });
    component.setProps({ errors: ['FirstName is required'] });
    component.setProps({ loading: true });
    component.setProps({ loadingSuccess: true });
  });

  it('should close the modal', () => {
    component.setProps({ loadingSuccess: false });
    component.instance().onCloseModal();
    expect(props.open).toEqual(false);
  });
});

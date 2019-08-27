import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { SignupForm } from '../src/components/SignupForm';

describe('About', () => {
  let component;

  const props = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: 'client',
    registerUser: jest.fn(),
    errors: [],
    history: {},
    loading: false,
    loadingSuccess: true,
    open: false,
  };

  beforeEach(() => {
    component = shallow(<SignupForm {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('should change firstName value when changeValueHandler is called', () => {
    const event = {
      target: {
        value: 'This is to test for firstName change',
        name: 'firstName',
      },
    };
    component.instance().changeValueHandler(event);
    const { firstName } = component.state();
    expect(firstName).toEqual(event.target.value);
  });

  it('should call the right function on form submission', () => {
    component.instance().onSubmit({ preventDefault: jest.fn() });
    expect(props.registerUser).toHaveBeenCalledTimes(1);
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

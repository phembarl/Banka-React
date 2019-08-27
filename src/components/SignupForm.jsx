import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import Loader from './Loader';
import './FeedbackModal/FeedbackModal.css';

export class SignupForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    type: 'client',
    password: '',
    open: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.onOpenModal();
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  changeValueHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const newUserDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      type: this.state.type,
      password: this.state.password,
    };

    this.props.registerUser(newUserDetails, this.props.history);
  }

  render() {
    const { errors } = this.props;
    const { open } = this.state;

    if (this.props.loading && this.props.loadingSuccess) {
      return <Loader />;
    }
    return (
      <div>
        <div id="welcome">
          <nav className="navbar form-nav visible">
            <Link to="/" className="linky">
              <div className="visible nav nav-link brand form-brand">Banka</div>
            </Link>

            <div className="toggle-btn visible nav-link">
              <span className="tog" />
              <span className="tog" />
              <span className="tog" />
            </div>

            <div className="nav-items nav-right">
              <div className="user form-users visible nav-link">Staff Login</div>
              <div className="user form-users visible nav-link">Admin</div>
            </div>
          </nav>

          <div>
            <form className="visible" id="signup-form" onSubmit={this.onSubmit}>
              <h3 id="form-text">Create Your Account</h3>
              <input required id="firstname" type="text" name="firstName" placeholder="First name" onChange={this.changeValueHandler} value={this.state.firstName} />
              <input required id="lastname" type="text" name="lastName" placeholder="Last name" onChange={this.changeValueHandler} value={this.state.lastName} />
              <input required id="email" type="email" name="email" placeholder="Email address" onChange={this.changeValueHandler} value={this.state.email} />

              <select className="sel" id="type" name="type" onChange={this.changeValueHandler} value={this.state.type}>
                <option>Client</option>
                <option>Staff</option>
              </select>

              <input required id="password" type="password" name="password" placeholder="Create password" onChange={this.changeValueHandler} value={this.state.password} autoComplete="false" />
              <input required type="Submit" name="" id="submit" />

              <Link to="/login" className="linky">
                <div className="other"> Already have an account? Sign in</div>
              </Link>
            </form>
          </div>

          <div className="image-overlay" />
        </div>
        <Modal className="message-modal" open={open} onClose={this.onCloseModal} center>
          <div className="modal-content2">
            <ul>
              {
                    errors.map(err => (
                      <li className="err-list" key={err}>{err}</li>
                    ))
                  }
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

SignupForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.shape([]),
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  loadingSuccess: PropTypes.bool.isRequired,
};

SignupForm.defaultProps = {
  errors: [],
};

export const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors.errors,
  loading: state.errors.loading,
  loadingSuccess: state.success.loading,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignupForm));

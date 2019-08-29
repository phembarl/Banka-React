import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { loginUser } from '../actions/authActions';
import Loader from './Loader';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    open: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.onOpenModal();
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };
    this.props.loginUser(userData, this.props.history);
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

  render() {
    const { errors } = this.props;
    const { errorMessage } = this.props;
    const { open } = this.state;

    if (this.props.loading && this.props.loadingSuccess) {
      return <Loader />;
    }

    return (
      <div>
        <div id="welcome">
          <nav className="navbar navbar-2 form-nav visible">
            <Link to="/" className="linky">
              <div className="visible nav-2 nav-link brand form-brand">Banka</div>
            </Link>

            <div className="toggle-btn toggle-btn-2 visible nav-link">
              <span className="tog" />
              <span className="tog" />
              <span className="tog" />
            </div>

            <div className="nav-items nav-right">
              <Link to="/signup" className="linky">
                <div className="user2 form-users visible nav-link">Sign Up</div>
              </Link>
            </div>
          </nav>

          <div>
            <form className="visible" id="login-form" onSubmit={this.onSubmit}>
              <h3 id="form-text">Sign In</h3>
              <input required type="email" id="email" name="email" placeholder="Email address" onChange={this.changeValueHandler} value={this.state.email} autoComplete="false" />
              <input required type="password" id="password" name="password" placeholder="Password" onChange={this.changeValueHandler} value={this.state.password} autoComplete="false" />
              <input type="Submit" name="" id="submit" />

              <Link to="/signup" className="linky">
                <div className="other">Don't have an account? Sign up</div>
              </Link>
            </form>
          </div>

          <div className="image-overlay" />
        </div>
        <Modal className="message-modal" open={open} onClose={this.onCloseModal} center>
          <div className="modal-content2">
            <ul>
              {
                    errors
                    && errors.map(err => (
                      <li className="err-list" key={err}>{err}</li>
                    ))
                  }
            </ul>
            {errorMessage && <p id="errorMessage">{errorMessage}</p>}
          </div>
        </Modal>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  // errors: PropTypes.shape(['']),
  errorMessage: PropTypes.string,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  loadingSuccess: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
  // errors: [],
  errorMessage: '',
};

export const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors.errors,
  errorMessage: state.errors.errorMessage,
  loading: state.errors.loading,
  loadingSuccess: state.success.loading,
});

export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));

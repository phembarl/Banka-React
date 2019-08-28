import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { createAccount } from '../../actions/userActions';
import Loader from '../Loader';
import './NewAccount.css';
import '../FeedbackModal/FeedbackModal.css';

class NewAccount extends Component {
  state = {
    type: 'savings',
    open: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.onOpenModal();
    }
  }

  changeValueHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const accountType = {
      type: this.state.type,
    };

    this.props.createAccount(accountType);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { errors } = this.props;
    const { errorMessage } = this.props;
    const successMessage = this.props.newAccountMessage;
    const { open } = this.state;

    if (this.props.loading && this.props.loadingSuccess) {
      return <Loader />;
    }

    return (
      <div>
        <div id="create">
          <nav className="visible navbar nav-in">
            <div>
              <a href="dashboard.html" className="visible nav nav-link">Banka</a>
            </div>

            <div className="nav-items">
              <Link to="/dashboard" className="linky">
                <div className="link nav-link active" href="dashboard.html">Home</div>
              </Link>

              <Link to="create-account" className="linky">
                <div className="link nav-link">New Account</div>
              </Link>

              <Link to="/transaction-history" className="linky">
                <div href="history.html" className="link nav-link">History</div>
              </Link>
            </div>

            <div className="toggle-btn visible nav-link">
              <span />
              <span />
              <span />
            </div>

            <div className="nav-items nav-right">
              <p className="who">User</p>

              <div className="options">
                <div className="avi">
                  <img className="pishicon" src={sessionStorage.getItem('avatar')} alt="" />
                </div>
                <p className="arrow"><i className="caret" /></p>
              </div>

              <a href="login.html" className="user visible nav-link logout">Log Out</a>

              <div className="menu-container">
                <ul className="user-menu">
                  <li><a className="user-menu-link" href="login.html">Log Out</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div id="createAccount">
            <form className="visible" id="account-form" onSubmit={this.onSubmit}>
              <h3 id="form-text">Create Bank Account</h3>

              <select className="sel" name="type" value={this.state.type} onChange={this.changeValueHandler}>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
              </select>

              <input type="Submit" name="" id="submit" />
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
            {
              successMessage
              && (
              <div>
                <p id="successMessage">{successMessage}</p>
                <p id="successMessage">
                  Account Number:
                  {` ${this.props.newAccount.accountNumber}`}
                </p>
                {
                  setTimeout(() => {
                    window.location.href = '/dashboard';
                  }, 500)
                }
              </div>
              )
              }
          </div>
        </Modal>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors.errors,
  errorMessage: state.errors.errorMessage,
  loading: state.errors.loading,
  loadingSuccess: state.success.loading,
  newAccount: state.newAccount.newAccount,
  newAccountMessage: state.newAccount.message,
});

export default connect(mapStateToProps, { createAccount })(withRouter(NewAccount));

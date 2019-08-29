import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { transact } from '../../actions/userActions';
import Loader from '../Loader';
import decodeToken from '../../utils/decoded';


export class Transact extends Component {
  state = {
    accountNumber: '',
    transactionType: 'credit',
    amount: '',
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
    const { accountNumber, transactionType } = this.state;

    const transactionData = {
      amount: this.state.amount,
    };

    this.props.transact(accountNumber, transactionType, transactionData);
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
    const transactionData = this.props.transactionDetails;
    const { transactionId } = this.props.transactionDetails;
    const { open } = this.state;

    if (this.props.loading && this.props.loadingSuccess) {
      return <Loader />;
    }

    const { type } = decodeToken().user;
    if (type === 'client') {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <div id="admin">
          <nav className="visible navbar nav-in">
            <div>
              <a href="accounts2.html" className="visible nav nav-link">Banka</a>
            </div>

            <div className="nav-items">
              <Link to="/transact" className="linky">
                <div className="link nav-link active" href="creditDebit.html">Transact</div>
              </Link>
            </div>

            <div className="toggle-btn visible nav-link">
              <span />
              <span />
              <span />
            </div>

            <div className="nav-items nav-right">
              <p className="who">Cashier</p>

              <div className="options">
                <div className="avi">
                  <img className="pishicon" src={localStorage.getItem('avatar')} alt="" />
                </div>
                <p className="arrow"><i className="caret" /></p>
              </div>

              <a href="staffLogin.html" className="user visible nav-link logout">Log Out</a>

              <div className="menu-container">
                <ul className="user-menu">
                  <li><a className="user-menu-link" href="staffLogin.html">Log Out</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <form className="visible" id="cred-form" onSubmit={this.onSubmit}>
              <h3 id="form-text">Transact</h3>
              <select className="sel">
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>

              <input required type="number" id="accountNumber" name="accountNumber" placeholder="Account Number" onChange={this.changeValueHandler} value={this.state.accountNumber} />
              <input required type="number" step="any" id="amount" name="amount" placeholder="Amount" onChange={this.changeValueHandler} value={this.state.amount} />
              <input required type="Submit" id="submit" />
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
              transactionId
              && (
              <div>
                <p id="successMessage">
                  Transaction Type:
                  {` ${transactionData.transactionType}`}
                </p>
                <p id="successMessage">
                  Account Number:
                  {` ${transactionData.accountNumber}`}
                </p>
                <p id="successMessage">
                  Account Balance:
                  {` ${transactionData.accountBalance}`}
                </p>
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
  transactionDetails: state.transactionDetails.transactionDetails,
  loading: state.errors.loading,
  loadingSuccess: state.success.loading,
  newAccount: state.newAccount.newAccount,
  newAccountMessage: state.newAccount.message,
});

export default connect(mapStateToProps, { transact })(withRouter(Transact));

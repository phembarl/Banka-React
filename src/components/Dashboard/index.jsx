import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAccounts, transactionHistory } from '../../actions/userActions';
import Loader from '../Loader';
import './Dashboard.css';
import './Dashboard2.css';
import '../FeedbackModal/FeedbackModal.css';
import '../History/History.css';

export class Dashboard extends Component {
  state = {};

  componentDidMount() {
    const email = localStorage.getItem('email');
    this.props.userAccounts(email);
  }

  /* istanbul ignore next */
  componentDidUpdate(prevProps) {
    if (prevProps.userAccount) {
      if (prevProps.userAccount.accountnumber !== this.props.userAccount.accountnumber) {
        const { accountnumber } = this.props.userAccount;
        this.props.transactionHistory(accountnumber);
      }
    }
    if (prevProps.newAccount.accountNumber !== this.props.newAccount.accountNumber) {
      const email = localStorage.getItem('email');
      this.props.userAccounts(email);
    }
  }

  render() {
    const { transactHistory } = this.props;

    if (this.props.accountLoading && this.props.historyLoading) {
      return <Loader />;
    }
    return (
      <div id="dashboard">
        <nav className="visible navbar nav-in">
          <Link to="/dashboard" className="linky">
            <div className="visible nav nav-link">Banka</div>
          </Link>

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
                <img className="pishicon" src={localStorage.getItem('avatar')} alt="" />
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

        <div className="infoDiv">
          <div className="visible info leftDiv">
            <div>
              <div className="image-cropper">
                <img src={localStorage.getItem('avatar')} alt="" id="me" className="avatar" />
              </div>

              <div className="records">
                <h2>
                  <span className="firstName">
                    {localStorage.getItem('firstName')}
                  </span>

                  <span className="lastName">
                    {` ${localStorage.getItem('lastName')}`}
                  </span>
                </h2>

                <p>
                  <span className="entry">
                    First Name:
                  </span>
                  <span className="firstName">
                    {` ${localStorage.getItem('firstName')}`}
                  </span>
                </p>
                <p>
                  <span className="entry">
                    Last Name:
                  </span>
                  <span className="lastName">
                    {` ${localStorage.getItem('lastName')}`}
                  </span>
                </p>
                <p>
                  <span className="entry">
                  Bank Accounts:
                  </span>
                  {' 1'}
                </p>
              </div>
            </div>
          </div>

          <div className="visible info rightDiv">
            <div>
              <div className="recs">
                <h2>
                  <span className="entry">
                    Account:
                  </span>
                  <span className="account">
                    {` ${this.props.userAccount.accountnumber}`}
                  </span>
                </h2>
                <p>
                  <span className="entry">
                    Account type:
                  </span>
                  <span className="accountType">
                    {` ${this.props.userAccount.type}`}
                  </span>
                </p>
                <p>
                  <span className="entry">
                    Balance:
                  </span>
                  {' ₦'}
                  <span className="balance">
                    {this.props.userAccount.balance}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div id="historyDiv">
          <div className="visible" id="hist">

            <div className="">
              <div id="table">
                <h1 className="heading">Transactions</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction Type</th>
                      <th>Amount</th>
                      <th>Transaction Currency</th>
                      <th>Old Balance</th>
                      <th>New Balance</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      transactHistory
                      && transactHistory.map(transaction => (
                        <tr key={transaction.id}>
                          <td>{transaction.createdon}</td>
                          <td>{transaction.type}</td>
                          <td>{transaction.amount}</td>
                          <td>NGN</td>
                          <td>{transaction.oldbalance}</td>
                          <td>{transaction.newbalance}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

        <div className="image-overlay" />
      </div>
    );
  }
}

/* istanbul ignore next */
export const mapStateToProps = state => ({
  auth: state.auth,
  userAccount: state.userAccount.account,
  transactHistory: state.transactionHistory.transactionHistory,
  errors: state.errors.errors,
  accountLoading: state.userAccount.loading,
  historyLoading: state.transactionHistory.loading,
  newAccount: state.newAccount.newAccount,
});

Dashboard.propTypes = {
  userAccounts: PropTypes.func.isRequired,
  transactionHistory: PropTypes.func.isRequired,
  transactHistory: PropTypes.arrayOf(PropTypes.object),
  userAccount: PropTypes.shape({
    accountnumber: PropTypes.number,
    type: PropTypes.string,
    balance: PropTypes.string,
  }),
  accountLoading: PropTypes.bool.isRequired,
  historyLoading: PropTypes.bool.isRequired,
};

Dashboard.defaultProps = {
  transactHistory: [],
  userAccount: {},
};

export default connect(mapStateToProps,
  { userAccounts, transactionHistory })(withRouter(Dashboard));

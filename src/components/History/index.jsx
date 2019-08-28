import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { userAccounts, transactionHistory } from '../../actions/userActions';
import '../FeedbackModal/FeedbackModal.css';
import './History.css';

class TransactHistory extends Component {
  state = {}

  componentDidMount() {
    const email = localStorage.getItem('email');
    this.props.userAccounts(email);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userAccount) {
      if (prevProps.userAccount.accountnumber !== this.props.userAccount.accountnumber) {
        const { accountnumber } = this.props.userAccount;
        this.props.transactionHistory(accountnumber);
      }
    }
  }

  render() {
    const { transactHistory } = this.props;

    if (this.props.accountLoading && this.props.historyLoading) {
      return <Loader />;
    }

    return (
      <div>
        <div id="history">
          <nav className="visible navbar nav-in">
            <div>
              <a href="dashboard.html" className="visible nav nav-link">Banka</a>
            </div>

            <div className="nav-items">
              <Link to="/dashboard" className="linky">
                <div className="link nav-link">Home</div>
              </Link>

              <Link to="create-account" className="linky">
                <div className="link nav-link">New Account</div>
              </Link>

              <Link to="/transaction-history" className="linky">
                <div className=" active link nav-link">History</div>
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


          <div id="historyDiv">
            <div className="visible" id="hist">

              <div className="">
                <div id="table">
                  <h1 className="heading"> Transaction History</h1>
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
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth,
  userAccount: state.userAccount.account,
  transactHistory: state.transactionHistory.transactionHistory,
  errors: state.errors.errors,
  loading: state.errors.loading,
  loadingSuccess: state.success.loading,
  accountLoading: state.userAccount.loading,
  historyLoading: state.transactionHistory.loading,
});

TransactHistory.propTypes = {
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

TransactHistory.defaultProps = {
  transactHistory: [],
  userAccount: {},
};

export default connect(mapStateToProps,
  { userAccounts, transactionHistory })(withRouter(TransactHistory));

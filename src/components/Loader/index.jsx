import React from 'react';
import Loader from 'react-loader-spinner';
import './index.scss';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      reload: <div className="loader__reload" />,
    };
  }

  componentDidMount() {
    this.timeOut();
  }

  timeOut = () => {
    setTimeout(() => {
      this.setState({
        reload: (
          <div className="loader__reload loader__reload-show">
          Sorry this is taking so long. Please wait or
            <span className="loader__reload-click" onClick={this.reload}>
                  Try Again
            </span>
          </div>
        ),
      });
    }, 6000);
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="loader">
          <Loader
            type="Circles"
            color="#00e6e6"
            height={100}
            width={100}
          />
          {this.state.reload}
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';
import logo from '../../resources/logos/logo.svg';
import './styles.scss';

import FilesList from '../../components/filesList';
import FileView from '../../components/fileView';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <img src={logo} className="dashboard-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Dashboard;

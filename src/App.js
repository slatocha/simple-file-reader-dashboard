import React, {Component} from 'react';
import Dashboard from './pages/dashboard'
import { pdfjs } from 'react-pdf';
// set up a global worker for pdf-js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/**
 * App.js is for a reason very empty
 * I would implement a react router inside of this file if needed
 * currently its only purpose is to render the whole dashboard
 */
class App extends Component {

  render() {
    return (
      <Dashboard />
    );
  }
}

export default App;

import React, {Component} from 'react';
import './styles.scss';

import FilesMenu from '../../components/filesMenu';
import FileView from '../../components/fileView';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentFile:null,
      files:[
        {name:"Document 01", description:"Nam vel porta velit"}, 
        {name:"Document 02", description:"Nam vel porta velit"},
        {name:"Document 03", description:"Nam vel porta velit"}, 
        {name:"Document 04", description:"Nam vel porta velit"},
        {name:"Document 05", description:"Nam vel porta velit"}, 
        {name:"Document 06", description:"Nam vel porta velit"},
        {name:"Document 07", description:"Nam vel porta velit"}, 
        {name:"Document 08", description:"Nam vel porta velit"},
        {name:"Document 09", description:"Nam vel porta velit"}, 
        {name:"Document 10", description:"Nam vel porta velit"},
      ]
    }

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  render() {
    let {files, currentFile} = this.state;
    return (
      <div className="dashboard">
        <FilesMenu files={files} onDocumentClick={(file) => this.setState({currentFile:file})} onDocumentUpload={file => this.handleFileUpload(file)}/>
        <FileView file={currentFile}/>
      </div>
    );
  }

  // user interaction
  handleFileUpload = (file) => {
    if (file && file != null) {
      let {files} = this.state;
      let _files = JSON.parse(JSON.stringify(files));
      _files.push(file);
      this.setState({files:_files});
    }
  }
}

export default Dashboard;

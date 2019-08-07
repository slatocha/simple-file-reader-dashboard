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
        // {id:1, name:"Document 01", description:"Nam vel porta velit"}, 
        // {id:2, name:"Document 02", description:"Nam vel porta velit"},
        // {id:3, name:"Document 03", description:"Nam vel porta velit"}, 
        // {id:4, name:"Document 04", description:"Nam vel porta velit"},
        // {id:5, name:"Document 05", description:"Nam vel porta velit"}, 
        // {id:6, name:"Document 06", description:"Nam vel porta velit"},
        // {id:7, name:"Document 07", description:"Nam vel porta velit"}, 
        // {id:8, name:"Document 08", description:"Nam vel porta velit"},
        // {id:9, name:"Document 09", description:"Nam vel porta velit"}, 
        // {id:10, name:"Document 10", description:"Nam vel porta velit"},
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
      let _files =  files;
      _files.push(file);
      this.setState({files:_files});
    }
  }
}

export default Dashboard;

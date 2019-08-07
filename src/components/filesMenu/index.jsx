import React, {Component} from 'react';
import PropTypes from 'prop-types';

import logo from '../../resources/logos/logo_sm_white.png';
import uploadBtnIcon from '../../resources/icons/iconUploadFile.svg';
import listBtnIcon from '../../resources/icons/iconListDocument.svg';

import './styles.scss';

class FilesMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentFile:null,
      messages:{
        "files.title":"Files",
        "button.files.upload":"Upload Files",
      }
    }

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDocumentUpload = this.handleDocumentUpload.bind(this);
  }

  static props = {
    files: PropTypes.array.isRequired,
    onDocumentClick: PropTypes.func.isRequired,
  }

  renderItem = (data, index) => {
    let {currentFile} = this.state;
    return (
      <li key={"button-"+index}>
        <button className={"list-button" + ((currentFile && currentFile != null && "id" in currentFile && currentFile.id == data.id) ? " list-button-active" : "")} onClick={() => this.handleDocumentClick(data)}>
          <div className="list-button-line-1">
            <img src={listBtnIcon} className="list-button-icon" alt="list-button-icon" />
            <ul><li>{data.name}</li><li>{data.description}</li></ul>
          </div>
        </button>
      </li>
    );
  }

  renderItemList = () => {
    let {files} = this.props;
    return (
      <div className="files-list-container">
        <ul className="files-list">
          {files.map((f,i)=>(this.renderItem(f,i)))}
        </ul>
      </div>
    );
  }

  renderItemUpload = () => {
    let {messages} = this.state;
    return (
      <div className="files-upload-container">
        <button className="upload-button" onClick={this.handleDocumentUpload}>
          <img src={uploadBtnIcon} className="upload-button-icon" alt="upload-button-icon" />
          <span>{messages["button.files.upload"] || "Upload Files"}</span>
      </button>
      </div>
    );
  }

  renderLogo = () => {
    return (
      <div className="files-logo-container">
        <img src={logo} className="files-logo" alt="logo" />
      </div>
    );
  }

  renderFilesTitle = () => {
    let { props:{files},
          state:{messages}} = this;

    return (
      files.length > 0 ? 
        <div className="files-title-container">
          <span className="files-fitle">{messages["files.title"] || "Files"}</span>
        </div>
      : ""
    );
  }

  render = () => {
    return (
      <div className="files-menu">
        {this.renderLogo()}
        {this.renderFilesTitle()}
        {this.renderItemList()}
        {this.renderItemUpload()}
      </div>
    );
  }

  // user interaction
  // handle file button click
  handleDocumentClick = (file) => {
    this.props.onDocumentClick(file);
    this.setState({currentFile:file});
  }

  // handle file button upload
  handleDocumentUpload = () => {
    console.log("Document upload")
  }
}

export default FilesMenu;
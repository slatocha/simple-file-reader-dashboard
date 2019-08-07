import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Document, Page } from 'react-pdf';

import DocumentIcon from '../../resources/icons/iconVisibleDocument.svg';

import './styles.scss';

class FileView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numPages: 0,
      pageNumber: 1,
       messages:{
        "button.next":"NEXT",
        "no.files.selected":"Currently no files selected."
      }
    }
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  static props = {
    file: PropTypes.any
  }

  renderTile = () => {
    let {file} = this.props;
    let _title = (file && file != null && "name" in file && file.name != null) ? file.name : null
    return (
      _title ?  <div className="file-title">
                  <img src={DocumentIcon} className="file-title-icon" alt="file-title-icon" />
                  <span>{_title}</span>
                </div>
             : ""
    );
  }

  renderTextDocument = (file) => {
    return (
      <div className="file">
        {file.data}
      </div>
    );
  }

  renderPDFDocument = (file) => {
    let {pageNumber, messages} = this.state;
    return (
      <div className="file">
        <Document
          file={file.data}
          onLoadSuccess={this.onDocumentLoadSuccess}
          noData={"Please select a .pdf file"}
        >
          <Page pageNumber={pageNumber} />
        </Document>
       <button className="next-button" onClick={this.nextPage}>{messages['button.next'] || "NEXT"}</button>
      </div>
    );
  }

  renderDocument = () => {
    let {props:{file},
         state:{messages}} = this;
    let isPlainText = file && file != null && "plainText" in file && file.plainText;
    let isPDF = file && file != null && !isPlainText;
    return (
       isPlainText ? this.renderTextDocument(file)
                   : (isPDF ? this.renderPDFDocument(file) 
                            : <div className="file-title"><span>{messages["no.files.selected"] || "Currently no files selected."}</span></div>)
    );
  }

  render() {
    return (
      <div className="file-view">
        {this.renderTile()}
        {this.renderDocument()}
      </div>
    );
  }

  // helper functions
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;
    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }
    this.setState({
      pageNumber: nextPageNumber
    });
  }
}

export default FileView;

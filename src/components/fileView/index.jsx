import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DocumentIcon from '../../resources/icons/iconVisibleDocument.svg';

import './styles.scss';

class FileView extends Component {

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

  renderDocument = () => {
    let {file} = this.props;
    return (
      file && file != null ? <div className="file">
                               
                             </div>
                           : ""
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
}

export default FileView;

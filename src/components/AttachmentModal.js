// src/components/AttachmentModal.js

import React, { useState } from 'react';
import './AttachmentModal.css';

const AttachmentModal = ({ onClose }) => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Upload Attachments</h2>
        <input type="file" multiple onChange={handleFileUpload} />
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name} - Extension: {file.name.split('.').pop()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttachmentModal;

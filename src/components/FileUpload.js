import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Selecciona un archivo primero.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData);

      if (response.status === 200) {
        onUpload();
      } else {
        alert('Error al cargar el archivo. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al subir el archivo. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="bg-blue-500 p-8 rounded-md shadow-md text-white">
      <input type="file" accept="text/csv" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-white text-blue-500 py-2 px-4 rounded-md">Subir Archivo</button>
    </div>
  );
};

export default FileUpload;

import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SuspiciousActivities from './components/SuspiciousActivities';

const App = () => {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Aplicación de Detección de Actividades Sospechosas</h1>
        <FileUpload onUpload={handleUpload} />
        {uploaded && <SuspiciousActivities />}
      </div>
    </div>
  );
};

export default App;

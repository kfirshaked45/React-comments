import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ReadFile } from './views/read-file';
import { Output } from './views/output';
import { useState } from 'react';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  console.log(uploadedFile);
  const readAndSetFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile(reader.result);
    };
    reader.readAsText(file);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      readAndSetFile(file);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReadFile handleUpload={handleUpload} />} />
        <Route path="/read-file" element={<ReadFile handleUpload={handleUpload} />} />
        <Route path="/output" element={<Output uploadedFile={uploadedFile} />} />
      </Routes>
    </div>
  );
}

export default App;

import { useNavigate } from 'react-router-dom';
import React from 'react';

export function ReadFile({ handleUpload }) {
  const navigate = useNavigate();

  return (
    <div>
      <input type="file" name="file" onChange={handleUpload} />
      <button onClick={() => navigate('/output')}>Go to output</button>
    </div>
  );
}

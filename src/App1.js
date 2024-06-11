import axios from 'axios';
import './App.css';

import React, { useState } from 'react'
const uploadUrl = 'https://api.cloudinary.com/v1_1/naeemakhter/image/upload';
function App() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    const image = new FormData();
    image.append('file', file);
    image.append('upload_preset', 'intolap');

    setLoading(true);
    const response = await axios.post(uploadUrl, image);
    setLoading(false);
    console.log(response.data.secure_url);
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="rrr">Choose a file:</label>
        <input type="file" id="rrr" onChange={e => setFile(e.target.files[0])} />
      </div>
      <button type="button" onClick={handleUpload}>
        {loading ? "Wait please..." : "Upload"}
      </button>
    </div>
  );
}

export default App;

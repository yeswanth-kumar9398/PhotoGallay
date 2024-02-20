// App.js
import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import UploadForm from './UploadForm';

function App() {
  const [images, setImages] = useState([]);

  const handleUpload = (newImages) => {
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDelete = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
      <UploadForm onUpload={handleUpload} />
      <ImageGrid images={images} onDelete={handleDelete} />
    </div>
  );
}

export default App;

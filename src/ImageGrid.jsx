// ImageGrid.js
import React from 'react';

function ImageGrid({ images, onDelete }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <img src={image.url} alt="Uploaded" className="w-full h-auto" />
          <button
            onClick={() => onDelete(image.id)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;

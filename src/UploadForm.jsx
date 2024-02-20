// UploadForm.js
import React, { useState } from 'react';

function UploadForm({ onUpload }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (e) => {
    const files = e.target.files;
    let uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        uploadedImages.push({ id: Date.now() + i, url: reader.result });
        if (uploadedImages.length === files.length) {
          setSelectedImages(uploadedImages);
          onUpload(uploadedImages);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleChange}
        className="border p-2"
      />
    </div>
  );
}

export default UploadForm;

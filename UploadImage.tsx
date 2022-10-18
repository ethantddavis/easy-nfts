import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

  
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          if (event.target.files !== null) {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          } else {
            console.log("error");
          }
        }}
      />
      <br />
      {selectedImage && (
        <div>
          <br/>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        </div>
      )}      
    </div>
  );
};

export default UploadImage;
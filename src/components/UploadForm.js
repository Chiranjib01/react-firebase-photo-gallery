import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please Select An Image File (Png,Jpg or Jpeg)");
    }
  };
  return (
    <>
      <form>
        <label>
          <span>+</span>
          <input type="file" onChange={changeHandler} />
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </form>
      {file && <ProgressBar file={file} setFile={setFile} />}
      {file && console.log(file.name)}
    </>
  );
}

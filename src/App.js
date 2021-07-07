import React, { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import { projectFirestore, projectStorage } from "../src/firebase/config";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const collectionRef = projectFirestore.collection("images");
  const storageRef = projectStorage.ref();

  const btnDelete = (id) => {
    collectionRef.doc(id).delete();
    storageRef.child(name).delete();
  };
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid
        setName={setName}
        setId={setId}
        setSelectedImg={setSelectedImg}
      />
      {selectedImg && (
        <Modal
          id={id}
          btnDelete={() => btnDelete(id)}
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
        />
      )}
    </div>
  );
}

export default App;

"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setpickedImage] = useState();
  const imageInput = useRef();
  function handleClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setpickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
          <div className={styles.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image src={pickedImage} alt="selected image" fill />
            )}
          </div>
          <input
            className={styles.input}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
          <button className={styles.button} type="button" onClick={handleClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}

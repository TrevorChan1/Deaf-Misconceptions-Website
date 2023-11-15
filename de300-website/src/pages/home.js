import React, { useEffect, useState, StrictMode } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll, list } from "firebase/storage";
// import logo from '../logo.svg';

const Home = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedImg, setSelectedImg] = useState();

    const imageRef = ref(storage, "images/");

    useEffect(() => {
        setImageUrls([]);
        listAll(imageRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          });
        });
      }, []);
  
    return (
        <div className="images">
          <div className="display">
            {imageUrls.map((url) => {
              return <img src={url} className="displayImg" onClick={() => setSelectedImg(url)} />;
            })}
          </div>
          {selectedImg ? (<img src = {selectedImg} className="displayImg selected"/>) : (<></>) }
        </div>
    );
};
  
export default Home;
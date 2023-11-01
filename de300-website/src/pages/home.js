import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll, list } from "firebase/storage";
// import logo from '../logo.svg';

const Home = () => {
    const [imageUrls, setImageUrls] = useState([]);

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
        <div className="App">
          {imageUrls.map((url) => {
            return <img src={url} />;
          })}
        </div>
    );
};
  
export default Home;
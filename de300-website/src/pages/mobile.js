import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useSwipeable } from "react-swipeable";

const Mobile = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageRef = ref(storage, "images/");

    useEffect(() => {
        setImageUrls([]);
        listAll(imageRef).then((response) => {
            const urls = [];
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    urls.push(url);
                    if (urls.length === response.items.length) {
                        // All URLs fetched
                        setImageUrls(urls);
                    }
                });
            });
        });
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % imageUrls.length),
        onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // Style object for responsive images
    const imageStyle = {
        width: '100%',       // Makes the image width responsive to the parent container
        height: 'auto',      // Scales the height automatically to preserve the aspect ratio
        maxWidth: '100%',    // Ensures the image is not larger than its original width
        display: 'block',    // Removes any extra space around the image
        margin: '0 auto'     // Optionally centers the image in the parent container
    };

    return (
        <div className="App" {...handlers} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={imageUrls[currentIndex]} 
              alt={`Slide ${currentIndex}`} 
              style={imageStyle} 
            />
            <p style={{ textAlign: "center", fontWeight: "bold", fontFamily: "Comic Sans MS, cursive, sans-serif" }}>Swipe for more!</p>
        </div>
    );
};

export default Mobile;

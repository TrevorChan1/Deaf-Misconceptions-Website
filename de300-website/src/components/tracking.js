import React, { useEffect }  from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, increment, setDoc, serverTimestamp, orderBy, query, limit, where, getDocs } from "firebase/firestore";



const Tracking = () => {
    const { building } = useParams();
    const navigate = useNavigate();
    // console.log(building)
    
    useEffect (() => {
        const trackingRef = doc(db, "tracking", building);
        getDoc(trackingRef). then((docSnap) => {
            if (docSnap.exists()) {
                updateDoc(trackingRef, {
                    count: increment(1)
                });
            }
            else {
                setDoc(trackingRef, {
                    count: 1
                });
            }
        }).then(() => {
            navigate('/');
        })
    }, [building])

    return null;
}

export default Tracking;
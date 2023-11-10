import React, { useEffect }  from "react";
import { useParams, Navigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, increment, setDoc, serverTimestamp, orderBy, query, limit, where, getDocs } from "firebase/firestore";



const Tracking = () => {
    const { building } = useParams();
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
            return <Navigate to="/"/>
        })
    }, [building])

    return <Navigate to="/"/>;
}

export default Tracking;
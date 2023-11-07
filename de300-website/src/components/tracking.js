import React  from "react";
import { redirect, useParams } from "react-router";
import { db } from "../firebase";
import { doc, updateDoc, increment, addDoc, collection, serverTimestamp, orderBy, query, limit, where, getDocs } from "firebase/firestore";



const Tracking = () => {
    const { building } = useParams();

    const trackingRef = doc(db, "tracking", building);
    updateDoc(trackingRef, {
        count: increment(1)
    });

    // Redirect to home page
    return redirect("/");
}

export default Tracking;
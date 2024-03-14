import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import LoadingScreen from "../LoadingScreen";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState(null);

  const getName = async () => {
    if (!localStorage.getItem("uid")) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }
    const uid = localStorage.getItem("uid");
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
    if (docSnap.exists()) {
      setName(docSnap.data().name);
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getName();
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <Navbar name={name} />
    </div>
  );
};

export default Contact;

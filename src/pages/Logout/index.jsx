import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const uid = localStorage.getItem("uid");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [dob, setDob] = useState(null);
  const navigate = useNavigate();
  const getData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setName(data.name);
      setEmail(data.email);
      setPhoneNo(data.phoneNo);
      setDob(data.dob);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData(uid);
  }, []);
  return (
    <div className="h-full min-h-screen md:dark:bg-gray-900">
      <Navbar />

      <div className="w-full flex flex-col items-center py-10 gap-10 ">
        <div className="flex justify-start w-[70%] p-10 text-white max-sm:justify-center bg-blue-100 md:dark:bg-blue-900/30 rounded-lg">
          <p className="font-bold text-2xl max-sm:text-xl bg-blue-700 rounded-lg p-5">
            Account Information
          </p>
        </div>
        <div className="w-[70%] p-10 flex justify-around flex-col text-white gap-5 bg-blue-100 md:dark:bg-blue-900/30 rounded-lg">
          <div className="flex items-center gap-10 bg-blue-700 rounded-lg p-5 max-sm:flex-col max-sm:text-center ">
            <p className="font-bold text-2xl">Name : </p>
            <p className="text-lg max-sm:w-full break-words">{name}</p>
          </div>
          <div className="flex items-center gap-10 bg-blue-700 rounded-lg p-5 max-sm:flex-col max-sm:text-center">
            <p className="font-bold text-2xl ">Email : </p>
            <p className="text-lg max-sm:w-full break-words">{email}</p>
          </div>
          <div className="flex items-center gap-10 bg-blue-700 rounded-lg p-5 max-sm:flex-col max-sm:text-center">
            <p className="font-bold text-2xl ">Phone Number : </p>
            <p className="text-lg max-sm:w-full break-words">{phoneNo}</p>
          </div>
          <div className="flex items-center gap-10 bg-blue-700 rounded-lg p-5 max-sm:flex-col max-sm:text-center">
            <p className="font-bold text-2xl">Date Of Birthday :</p>{" "}
            <p className="text-lg max-sm:w-full break-words">{dob}</p>
          </div>
        </div>
        <div className="w-[70%] flex justify-start ">
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("uid");
              navigate("/");
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-16 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

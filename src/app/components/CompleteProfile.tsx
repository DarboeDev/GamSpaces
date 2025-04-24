"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import { useRouter } from "next/navigation";

const CompleteProfile = ({ userId, setCompleteProfile }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    clerkId: userId || "",
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    role: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const createProfile = async (role) => {
    try {
      // Fetch user data
      // const userData = await getClerkUser(userId);

      // Prepare profile data
      // const profileData = {
      //   clerkId: userId || "",
      //   firstName: userData?.firstName || "",
      //   lastName: userData?.lastName || "",
      //   email: userData?.emailAddresses[0]?.emailAddress || "",
      //   avatar: userData?.imageUrl || "",
      //   role: role,
      // };

      // Update state with the form data
      // setFormData(profileData);
      // Post profile data

      console.log(
        "🚀 ~ file: CompleteProfile.tsx:30 ~ createProfile ~ profileData:"
      );

      const res = await axios.post(
        "http://localhost:3001/api/users",
        // profileData
      );

      if (res.status === 201) {
        setSubmitted(true);
      }
      console.log(
        "🚀 ~ file: CompleteProfile.tsx:30 ~ createProfile ~ res:",
        res
      );
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  if (submitted) {
    return (
      <>
        <div className="w-full fixed z-[9000] backdrop-blur-md top-0 left-0 min-h-screen"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-md w-[500px] absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col z-[9999] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-black">
            Congratulations!
          </h2>
          <p className="text-lg text-black">
            You have successfully joined JokorHub as a{" "}
            <span className="font-extrabold capitalize">{formData.role}</span>.
          </p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 w-full flex justify-center items-center"
          >
            <div className="check-container">
              <div className="check-background">
                <svg
                  viewBox="0 0 65 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 25L27.3077 44L58.5 7"
                    stroke="white"
                    strokeWidth="13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="check-shadow"></div>
            </div>
          </motion.div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <div className="w-full fixed z-[9999] backdrop-blur-md top-0 left-0 min-h-screen"></div>
      <div className="w-[500px] text-black absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col z-[9999] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-6">Choose Your Role</h2>
        <div className="flex justify-around">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonIcon />}
            onClick={() => createProfile("buyer")}
            className="w-1/3"
          >
            Buyer
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<BusinessIcon />}
            onClick={() => createProfile("agent")}
            className="w-1/3"
          >
            Agent
          </Button>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;

"use client";
import React from "react";
import { Close } from "@mui/icons-material";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <Close fontSize="large" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

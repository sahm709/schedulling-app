import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-500 text-3xl hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

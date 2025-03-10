import React, { useEffect, useRef } from "react";
import { languages } from './Languages';
import { setSelectedLanguage } from "./GetSelectedLang";
import { useDispatch } from "react-redux";

const SelectLang = ({ open, onClose }) => {
    const modalRef = useRef(null);
    const dispatch = useDispatch();

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Close the modal
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    if (!open) return null; // Don't render the modal if `open` is false

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-lg max-w-md w-full px-8"
            >
                {/* Modal Header */}
                <div className="py-2 flex justify-between items-center border-b">
                    <h2 className="text-lg font-semibold">Choose a language</h2>
                    <button
                        onClick={onClose}
                        className="text-black hover:text-gray-700 font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Content */}
                {languages?.map((item) => (
                    <div
                        key={item.id}
                        className="py-3 cursor-pointer"
                        onClick={() => {
                            setSelectedLanguage(dispatch,item?.setLang)
                            onClose(); // Close the modal after setting the language
                        }}
                    >
                        <p className="text-black">{item?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectLang;

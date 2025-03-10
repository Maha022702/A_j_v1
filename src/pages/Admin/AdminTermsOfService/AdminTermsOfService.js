import React, { useState } from "react";
// import axios from "axios";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const AdminTermsOfService = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    // try {
    //   // Replace with your backend API endpoint
    //   const apiUrl = "https://your-backend-url.com/api/terms-of-service";
    //   const response = await axios.post(apiUrl, {
    //     title,
    //     content,
    //   });
    //   alert("Terms of Service updated successfully!");
    // } catch (error) {
    //   console.error("Error updating Terms of Service:", error);
    //   alert("Failed to update Terms of Service.");
    // }
  };

  console.log('content',content);
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Content:</label>
        {/* <ReactQuill
          value={content}
          onChange={setContent}
          className="bg-white"
          placeholder="Enter the content with formatting"
        /> */}
      </div>
      <button
        onClick={handleSave}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Save Terms of Service
      </button>
    </div>
  );
};

export default AdminTermsOfService;

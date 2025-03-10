import React, { useEffect, useState } from "react";
import { getRefundPolicy, postRefundPolicy } from "../../../services/api";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const AdminRefundPolicy = () => {
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);
  const [content, setContent] = useState("");

  useEffect(() => {
    getRefundPolicy()
      .then((res) => {
        // console.log("Get Refund Policy Response : ", res);
        if (res?.status === 200) {
          setContent(res?.data[0]?.content);
        }
      })
      .catch((error) => {
        console.log("Get Refund Policy Error : ", error);
      });
  }, []);

  const handleSave = async () => {
    let payload = {
      content: content,
    };
    postRefundPolicy(payload, authToken)
      .then((res) => {
        // console.log("Post Refund Policy Response : ", res);
        if (res?.status === 201) {
          toast.success("Privacy Policy updated successfully");
        } else {
          toast.error("Something went wrong please try again later");
        }
      })
      .catch((err) => {
        console.log("Post Refund Policy Error : ", err);
        toast.error("Something went wrong please try again later");
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Content:</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          className="bg-white"
          placeholder="Enter the content with formatting"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Save Refund Policy
      </button>
    </div>
  );
};

export default AdminRefundPolicy;

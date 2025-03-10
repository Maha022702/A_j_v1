import React, { useEffect, useState } from "react";
import { getPrivacyPolicy, postPrivacyPolicy } from "../../../services/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminPrivacyPolicy = () => {
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);
  const [editorValue, setEditorValue] = useState();

  useEffect(() => {
    getPrivacyPolicy()
      .then((res) => {
        // console.log("Get Privacy Policy Response :", res?.data);
        setEditorValue(res?.data[0]?.content);
      })
      .catch((err) => {
        console.log("Get Privacy Policy Error :", err);
      });
  }, []);

  const handleSave = async () => {
    let payload = {
      content: editorValue,
    };
    postPrivacyPolicy(payload, authToken)
      .then((res) => {
        // console.log("Post Privacy Policy Response : ", res);
        if (res?.status === 201) {
          toast.success("Privacy Policy updated successfully");
        } else {
          toast.error("Something went wrong please try again later");
        }
      })
      .catch((err) => {
        console.log("Post Privacy Policy Error : ", err);
        toast.error("Something went wrong please try again later");
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-6xl font-bold mb-4 text-center">Privacy Policy</h1>

      <div className="mb-4">
        <ReactQuill
          value={editorValue}
          onChange={setEditorValue}
          theme="snow"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Save Privacy Policy
      </button>
    </div>
  );
};

export default AdminPrivacyPolicy;

import React, { useEffect } from "react";
import { addFAQ, updateFAQ } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FQA_Edit_Data } from "../../../redux/slices/dashSlice";

const AddNewFaq = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);
  const FQA_Edit_Data_details = useSelector(
    (state) => state?.dashboard?.FQA_Edit_data_
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (FQA_Edit_Data_details) {
      setValue("question", FQA_Edit_Data_details.question);
      setValue("answer", FQA_Edit_Data_details.answer);
    }
  }, [FQA_Edit_Data_details, setValue]);

  const onSubmit = (data) => {
    if (FQA_Edit_Data_details?._id) {
      updateFAQ(FQA_Edit_Data_details?._id, data, authToken)
        .then((res) => {
          // console.log("Updated FAQ Response:", res);
          if (res?.status === 200) {
            reset();
            dispatch(FQA_Edit_Data(null));
            toast.success("FAQ is updated successfully");
          } else {
            toast.error("Something went wrong, please try again later");
          }
        })
        .catch((error) => {
          console.log("Updated FAQ Error:", error);
          toast.error("Something went wrong, please try again later");
        });
    } else {
      addFAQ(data, authToken)
        .then((res) => {
          // console.log("Add New FAQ Response : ", res?.data);
          if (res?.status === 201) {
            reset();
            toast.success("FAQ is added successfully");
          } else {
            toast.error("Something went wrong please try again later");
          }
        })
        .catch((error) => {
          console.log("Add New FAQ Error : ", error);
          toast.error("Something went wrong please try again later");
        });
    }
  };

  return (
    <div className="mx-auto p-6 max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <h3 className="text-lg font-semibold mb-4 text-center">Add New</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="question"
            >
              Question:
            </label>
            <input
              id="question"
              type="text"
              className={`w-full px-4 py-2 border ${
                errors.question ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.question ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter the question"
              {...register("question", { required: "Question is required" })}
            />
            {errors.question && (
              <p className="text-red-500 text-sm mt-1">
                {errors.question.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="answer">
              Answer:
            </label>
            <textarea
              id="answer"
              className={`w-full px-4 py-2 border ${
                errors.answer ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.answer ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter the answer"
              rows="4"
              {...register("answer", { required: "Answer is required" })}
            />
            {errors.answer && (
              <p className="text-red-500 text-sm mt-1">
                {errors.answer.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          >
            Add FAQ
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewFaq;

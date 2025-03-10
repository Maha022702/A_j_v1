import React, { useEffect, useState } from "react";
import Delete from "../../../assets/images/delete.png";
import Edit from "../../../assets/images/edit-text.png";
import ConfirmationModal from "./ConfirmationModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFAQ, getFAQ } from "../../../services/api";
import { FQA_Edit_Data, FQA_List } from "../../../redux/slices/dashSlice";
import { toast } from "react-toastify";

const FaqList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const FQA_Data_List = useSelector((state) => state?.dashboard?.FQA_Data_List);
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFaqDetail, setFaqDetail] = useState("");

  useEffect(() => {
    getFAQ()
      .then((res) => {
        // console.log("Get FAQ Response : ", res?.data);
        if (res?.status === 200) {
          dispatch(FQA_List(res?.data));
        }
      })
      .catch((error) => {
        console.log("Get FAQ Error : ", error);
      });
  }, [dispatch]);

  const handleConfirm = () => {
    deleteFAQ(isFaqDetail?._id, authToken)
      .then((res) => {
        // console.log("Delete FAQ Response : ", res);
        if (res?.status === 200) {
          toast.success("Deleted successfully");
          const updatedList = FQA_Data_List.filter(
            (item) => item._id !== isFaqDetail?._id
          );
          dispatch(FQA_List(updatedList));
        } else {
          toast.error("Something went wrong please try again later");
        }
        setModalOpen(false);
        setFaqDetail("");
      })
      .catch((error) => {
        console.log("Delete FAQ Error : ", error);
        toast.error("Something went wrong please try again later");
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-end">
        <h1
          className="text-white font-bold p-3 rounded-md bg-green-500 shadow-2xl cursor-pointer hover:bg-green-900"
          onClick={() => {
            navigate("/addNewFaq");
          }}
        >
          Add New
        </h1>
      </div>

      {FQA_Data_List.map((item, index) => {
        return (
          <div className="bg-blue-50  shadow-md rounded-md my-5 relative pb-5 transform translate duration-700 hover:scale-105 hover:shadow-xl">
            <div className="flex p-5">
              <text className="mr-6">{index + 1}</text>{" "}
              <p className="font-bold">{item?.question}</p>
            </div>
            <p className="ml-20">{item?.answer}</p>
            <div className="absolute right-0 flex top-2">
              <div
                className="p-2 border-2 rounded-md shadow-lg mr-5 cursor-pointer hover:bg-white"
                onClick={() => {
                  setModalOpen(true);
                  setFaqDetail(item);
                }}
              >
                <img src={Delete} className="h-5 w-5" alt="Delete" />
              </div>
              <div
                className="p-2 border-2 rounded-md shadow-lg cursor-pointer hover:bg-white"
                onClick={() => {
                  navigate("/addNewFaq");
                  dispatch(FQA_Edit_Data(item));
                }}
              >
                <img src={Edit} className="h-5 w-5" alt="'Edit" />
              </div>
            </div>
          </div>
        );
      })}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Are you sure you want to delete?"
        data={isFaqDetail}
        handleConfirm={handleConfirm}
      >
        <p className="text-gray-700">{isFaqDetail?.question}</p>
        <p className="text-gray-500">{isFaqDetail?.answer}</p>
      </ConfirmationModal>
    </div>
  );
};

export default FaqList;

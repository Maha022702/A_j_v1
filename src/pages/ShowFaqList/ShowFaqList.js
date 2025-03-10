import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFAQ } from "../../services/api";
import { FQA_List } from "../../redux/slices/dashSlice";

const ShowFaqList = () => {
  const dispatch = useDispatch();
  const FQA_Data_List = useSelector((state) => state?.dashboard?.FQA_Data_List);

  useEffect(() => {
    getFAQ()
      .then((res) => {
        // console.log("Get FAQ Response : ", res);
        if (res?.status === 200) {
          dispatch(FQA_List(res?.data));
        }
      })
      .catch((error) => {
        console.log("Get FAQ Error : ", error);
      });
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-10 p-6 bg-blue-50 shadow-md rounded-md">
      <section className="w-full py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {FQA_Data_List?.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <p className="text-lg font-semibold">{faq.question}</p>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowFaqList;

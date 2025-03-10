import React, { useEffect, useState } from "react";
import { getContactRequest } from "../../../services/api";
import { useSelector } from "react-redux";

const ContactRequestList = () => {
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);
  const [contactReqList, setContactReqList] = useState([]);

  useEffect(() => {
    getContactRequest(authToken)
      .then((res) => {
        // console.log("Get Contact Request Response : ", res);
        if (res?.status === 200) {
          setContactReqList(res?.data);
        }
      })
      .catch((err) => {
        console.log("Get Contact Request Error : ", err);
      });
  }, [authToken]);

  return (
    <div className="container place-self-center overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Request</h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-gray-400 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Mobile No.</th>
            <th className="py-3 px-6 text-left">Message.</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {contactReqList.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{item._id}</td>
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.email}</td>
              <td className="py-3 px-6 text-left">{item.mobileNo}</td>
              <td className="py-3 px-6 text-left">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactRequestList;

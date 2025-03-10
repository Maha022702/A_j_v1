import React, { useEffect, useState } from "react";
import { getUserList } from "../../../services/api";
import { useSelector } from "react-redux";
import Pagination from "../../../components/Pagination";

const UserList = () => {
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);
  const [userList, setUserList] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    getUserList(pageNo, authToken)
      .then((res) => {
        // console.log("Get User List Response : ", res?.data);
        if (res?.status === 200) {
          setUserList(res?.data);
        }
      })
      .catch((err) => {
        console.log("Get User List Error : ", err);
      });
  }, [authToken, pageNo]);

  const handlePageChange = (pageNumber) => {
    setPageNo(pageNumber);
  };

  return (
    <div className="container place-self-center overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Registered Users
      </h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-gray-400 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {userList?.user?.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{item.id}</td>
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={userList?.currentPage}
        totalPage={userList?.totalPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserList;

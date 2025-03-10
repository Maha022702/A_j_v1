import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrivacyPolicy } from "../../services/api";
import { Get_Privacy_Policy } from "../../redux/slices/dashSlice";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const PrivacyPolicyData = useSelector(
    (state) => state?.dashboard?.Privacy_Policy_Data
  );

  useEffect(() => {
    getPrivacyPolicy()
      .then((res) => {
        console.log("Get Privacy Policy Response : ", res);
        if (res?.status === 200) {
          dispatch(Get_Privacy_Policy(res?.data));
        }
      })
      .catch((error) => {
        console.log("Get Privacy Policy Error : ", error);
      });
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h2>
      <div
        className="bg-blue-50 shadow-md rounded-md p-6"
        dangerouslySetInnerHTML={{ __html: PrivacyPolicyData[0]?.content }}
      ></div>
    </div>
  );
};

export default PrivacyPolicy;

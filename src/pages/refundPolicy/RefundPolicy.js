import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRefundPolicy } from "../../services/api";
import { Get_Refund_Policy } from "../../redux/slices/dashSlice";

const RefundPolicy = () => {
  const dispatch = useDispatch();
  const RefundPolicyData = useSelector(
    (state) => state?.dashboard?.Privacy_Refund_Data
  );

  useEffect(() => {
    getRefundPolicy()
      .then((res) => {
        console.log("Get Privacy Policy Response : ", res);
        if (res?.status === 200) {
          dispatch(Get_Refund_Policy(res?.data));
        }
      })
      .catch((error) => {
        console.log("Get Privacy Policy Error : ", error);
      });
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Refund Policy</h2>
      <div
        className="p-6 bg-blue-50 shadow-md rounded-md"
        dangerouslySetInnerHTML={{ __html: RefundPolicyData[0]?.content }}
      ></div>
    </div>
  );
};

export default RefundPolicy;

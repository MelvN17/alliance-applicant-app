import React, { useEffect, useState } from "react";
import axios from "axios";

// {
//     "applicant_id": 1,
//     "applicant_firstname": "John",
//     "applicant_lastname": "Ferrolino",
//     "applicant_email": "string@gmail.com",
//     "applicant_phonenumber": "09431735690",
//     "applicant_position": 1
// }
const TestFetch = () => {
  const [data, setData] = useState();

  const getApplicantById = async () => {
    try {
      const res = await axios.get(
        "http://localhost:55731/api/ApplicantAPI/getApplicant?id=1"
      );
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getApplicantById();
  }, []);
  return (
    <div>
      {data?.applicant_id}
      {data?.applicant_firstname}
      {data?.applicant_lastname}
      {data?.applicant_email}
      {data?.applicant_phonenumber}
      {data?.applicant_position}
    </div>
  );
};

export default TestFetch;

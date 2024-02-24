import React, { useState, useEffect } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import Record from "./Record";

const LendMoney = () => {
  const { user } = UserAuth();
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const fetchLoanData = async (user) => {
      try {
        const response = await fetch(`/getLoanRequest/${user.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch loan data");
        }
        console.log(user);
        const data = await response.json();
        setLoanData(data);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchLoanData(user);
  }, [user]);

  return (
    <div className="p-5 bg-gradient-to-r from-blue-200 to-blue-100">
      <h1 className="text-5xl font-thin mb-5">Loan requests</h1>
      <div className="w-full h-full bg-white grid grid-cols-5 gap-3 p-3 shadow-lg rounded-lg">
        <h1 className="text-xl text-gray-800 font-bold ">Applicant name</h1>
        <h1 className="text-xl text-gray-800 font-bold ">Sex</h1>
        <h1 className="text-xl text-gray-800 font-bold ">Age</h1>
        <h1 className="text-xl text-gray-800 font-bold ">IQ</h1>
        <h1 className="text-xl text-gray-800 font-bold ">Risk assessment</h1>
      </div>
      {loanData.map((data, index) => (
        <Record key={index} {...data} />
      ))}
    </div>
  );
};

export default LendMoney;

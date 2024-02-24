import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline"; // Using Hero Icons for modern look
import UserDetails from "../Main/UserDetails";

const Record = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="w-full grid grid-cols-5 gap-3 p-3 border-b border-gray-200">
      <div className="text-gray-900">{props.email}</div>
      <div className="text-gray-900">M</div>
      <div className="text-gray-900">{props.loan_period}</div>
      <div className="text-gray-900">{props.iq}</div>
      <div
        className="flex items-center space-x-2 text-black cursor-pointer "
        onClick={handleShowDetails}
      >
        <span className="text-sm">Details</span>
        <ChevronDownIcon
          className={`bg-[#62D69C] text-white w-5 h-5 ${
            showDetails ? "transform rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`border-2 p-3 col-span-5 ${!showDetails ? "hidden" : ""}`}
      >
        <UserDetails
          yield_performance={props.yield_performance}
          soil_health={props.soil_health}
          irrigation_condition={props.irrigation_condition}
          risk_property_flood={props.risk_property_flood}
          risk_property_drought={props.risk_property_drought}
        />
      </div>
    </div>
  );
};

export default Record;

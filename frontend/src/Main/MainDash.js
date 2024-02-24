import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import UserDetails from "./UserDetails";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";

const MainDash = () => {
  const { user } = UserAuth();
  const [soilData, setSoilData] = useState({});

  useEffect(() => {
    const fetchSoilData = async (user) => {
      try {
        const response = await fetch(`/getUserData/${user.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch soil data");
        }
        const data = await response.json();
        setSoilData(data[0]);
      } catch (error) {
        console.error("Error fetching soil data:", error);
      }
    };

    // Call the function to fetch soil data
    fetchSoilData(user);
  }, [user]);

  const CropData = [
    { name: "Wheat", season: "Winter", area: 1000, kgha: 1500 },
    { name: "Rice", season: "Monsoon", area: 2000, kgha: 2000 },
    { name: "Maize", season: "Summer", area: 1500, kgha: 1800 },
    { name: "Barley", season: "Winter", area: 1200, kgha: 1600 },
  ];

  return (
    <div className="p-5 h-full ">
      <div className=" bg-white h-3/4 p-3 rounded-md text-gray-900 border-2 mb-3">
        <h1 className="text-3xl font-bold  border-b-2 pb-2">My Dashboard</h1>

        <UserDetails
          yield_performance={soilData.yield_performance}
          soil_health={soilData.soil_health}
          irrigation_condition={soilData.irrigation_condition}
          risk_property_flood={soilData.risk_property_flood}
          risk_property_drought={soilData.risk_property_drought}
        />
      </div>
      {/* <div>
        <h1 className="text-xl font-bold py-3">
          Major crops & their performance
        </h1>
        <DataTable data={CropData} />
      </div> */}
    </div>
  );
};

export default MainDash;

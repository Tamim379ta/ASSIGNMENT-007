"use client"

import { CallContext } from "@/components/context/call.context";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


const StatsPage = () => {

  const { call } = useContext(CallContext)
  const callCount = call.filter(c => c.type === "call").length;
  const textCount = call.filter(c => c.type === "text").length;
  const videoCount = call.filter(c => c.type === "video").length;


  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#FF8042" },
    { name: "Video", value: videoCount, fill: "#00C49F" },
  ];

  return (
    <div className="container mx-auto  py-10">
      <div className="mb-5">
        <h1 className="text-4xl font-bold">Friendship Analytics</h1>
        <br />
      </div>
      <div className="shadow-2xl border mt-4 border-gray-300 p-5">
        <p className="font-bold">By Interaction Type</p>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>


  );
};

export default StatsPage;
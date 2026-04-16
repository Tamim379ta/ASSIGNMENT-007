"use client"

import { CallContext } from "@/components/context/call.context";
import { useContext, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";

const TimeLinePage = () => {

  const { call } = useContext(CallContext)
  const [filterType, setFilterType] = useState("all");

  const handleFilter = (data) => {
    setFilterType(data)
  }

  const filteredCall = filterType === "all"
    ? call
    : call.filter(item => item.type === filterType);

  return (
    <div className="container py-10 mx-auto ">

      <div className="py-5">
        <h1 className="font-bold text-2xl">TimeLine</h1>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">Filter TimeLine  <IoIosArrowDropdown className="text-xl ml-5" /></div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleFilter("all")} className="font-semibold"><a>All</a></li>
            <li onClick={() => handleFilter("call")} className="font-semibold"><a>Call</a></li>
            <li onClick={() => handleFilter("text")} className="font-semibold"><a>Text</a></li>
            <li onClick={() => handleFilter("video")} className="font-semibold"><a>Video</a></li>
          </ul>
        </div>

      </div>

      <div className=" flex flex-col gap-4">


        {
          filteredCall.map(c => {
            return (
              <div
                className="p-5 gap-4   rounded-2xl shadow-xl border flex items-center border-gray-300"
                key={`${c.id}-${c.type}-${c.time}`}>
                <div>
                  <p className="text-3xl mt-2 ">{c.type === "call" ? <FiPhoneCall /> : c.type === "text" ? <MdTextsms /> : <IoVideocamOutline />}</p>
                </div>

                <div>
                  <p className="font-semibold">{c.type === "call" ? "Call" : c.type === "text" ? "Text" : "Video"}
                    <span className="text-gray-400 font-semibold"> with {c.name}</span>
                  </p>
                  <p>{new Date(c.time).toLocaleString("en-us", {
                    month: "long", 
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</p>
                </div>

              </div>
            )
          })
        }


      </div>

    </div>
  );
};

export default TimeLinePage;

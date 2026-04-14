"use client"

import { CallContext } from "@/components/context/call.context";
import { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";

const TimeLinePage = () => {

  const { call } = useContext(CallContext)
  return (
    <div className="container py-10 mx-auto ">

      <div className="py-5">
        <h1 className="font-bold text-2xl">TimeLine</h1>

        <input type="text" className="border border-amber-400" />
      </div>

      <div className=" flex flex-col gap-4">
        {
          call.map(c => {
            return (
              <div
                className="p-5 gap-4   rounded-2xl shadow-xl border flex items-center border-gray-300"
                key={c.id}>
                <div>
                  <p className="text-3xl mt-2 ">{c.type === "call" ? <FiPhoneCall /> : c.type === "text" ? <MdTextsms /> : <IoVideocamOutline />}</p>
                </div>

                <div>
                  <p className="font-semibold">{c.type === "call" ? "Call" : c.type === "text" ? "Text" : "Video"} 
                  <span className="text-gray-400 font-semibold"> with {c.name}</span>
                  </p>
                  <p>{c.time.toLocaleTimeString()}</p>
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

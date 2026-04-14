"use client"
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdTextsms } from 'react-icons/md';
import { CallContext } from '../context/call.context';

const CallBtn = ({ friend }) => {

  const { handleCall } = useContext(CallContext)
  return (
    <div>

      <div className="flex gap-5 mt-2">
        <button onClick={() => handleCall(friend, "call")} className="btn flex-1 py-10"> <span ><FiPhoneCall className="text-3xl " /> Call</span></button>
        <button onClick={() => handleCall(friend, "text")} className="btn flex-1 py-10"><span><MdTextsms className="text-3xl " /> Text</span></button>
        <button onClick={() => handleCall(friend, "video")} className="btn flex-1 py-10"><span ><IoVideocamOutline className="text-3xl " /> Video</span></button>
      </div>

    </div>
  );
};

export default CallBtn;
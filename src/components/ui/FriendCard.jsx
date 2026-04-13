import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className='text-center shadow-xl border border-gray-300 p-5 rounded-2xl space-y-3 '>
        <div className='flex justify-center'>
          <Image src={picture}
            alt={name}
            width={60}
            height={30}
            className='rounded-4xl'
          />
        </div>
        <h1>{name}</h1>
        <p><span>{days_since_contact}</span>d ago</p>

        <div className='flex gap-2 justify-center'>
          {
            tags.map((tag, ind) => <span
              className='badge bg-green-300 py-3 rounded-3xl font-semibold text-black'
              key={ind}>{tag}</span>)
          }
        </div>

        <div className={`text-white badge rounded-4xl font-semibold ${status === "overdue" ? "bg-red-400" : status === "on-track" ? "bg-green-800" : "bg-amber-300"}`} >{status}</div>

      </div>
    </Link>
  );
};

export default FriendCard;
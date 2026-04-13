import FriendCard from '@/components/ui/FriendCard';
import React from 'react';

const FriendsPage = async () => {

  const res = await fetch("http://localhost:3000/data.json")
  const data = await res.json()
  return (
    <div className='bg-base-200'>

      <h1 className='container mx-auto font-bold px-20 pt-5 text-2xl'>Your Friends</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 md:px-20 py-10  container mx-auto'>

        {
          data.map(friend => <FriendCard
            friend={friend}
            key={friend.id} />)
        }

      </div>
    </div>
  );
};

export default FriendsPage;
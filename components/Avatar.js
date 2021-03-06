import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

export default function Avatar({username, logoutProps}) {

    const {user, logout}= useMoralis();
  return (
      <Image
      alt='user avatar'
      className='rounded-full
      bg-black cursor-pointer hover:opacity-75'
      src={`https://avatars.dicebear.com/api/adventurer/${username || user.get('username')}.svg`}
      layout='fill'
      onClick={()=> logoutProps && logout()} />
  );
}

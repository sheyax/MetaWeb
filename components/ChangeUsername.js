import React from 'react';
import {useMoralis} from 'react-moralis'

export default function ChangeUsername() {
    const{setUserData, isUserUpdating, userError, user, logout}= useMoralis();

    const setUsername =() =>{
        const username= prompt(`Enter yournew Username (current: ${user.getUsername()})`);

        if (!username) return;

        setUserData({
            username,
        });
    }
  return (
    <div className='flex flex-col text-sm absolute top-5 right-5'>

        <button disabled={isUserUpdating}
        onClick={setUsername}
        className='hover:text-white'>Change username</button>

        <button disabled={isUserUpdating}
        onClick={logout}
        className='text-red-400'>Logout</button>
    
    </div>
  );
}

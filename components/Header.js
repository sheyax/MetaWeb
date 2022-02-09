import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';
export default function Header() {
const {user}= useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 lg:h-50
     bg-black border-indigo-500 border-b-2  text-indigo-500">
    <div className='grid grid-cols-5 lg:grid-cols-6 items-end
    lg:items-center'>
        <div className='relative h-24 w-24 mx-auto 
        hidden lg:inline-grid' >
            <Image alt='profile picc' src='https://images.unsplash.com/photo-1635940960084-3794d7d85f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80'
            className='rounded-full '
            ObjectFit='cover'
            layout='fill'/>
        </div>

        <div className='col-span-4 text-left lg:text-center '>
            {/*Avatar*/}
            <div className='relative h-20 w-20 lg:h-40 lg:w-40 lg:mx-auto rounded-full'>
                <Avatar logoutProps/>
            </div>
            {/*welcome message*/}

            <h1 className=' text-xl lg:text-3xl'
            > Welcometo MetaChat app</h1>
            {/*username*/}
            <h2 className='text-2xl text-white lg:text-5xl font-bold truncate'>{user.getUsername()}</h2>
            

            {/*change username component*/}
            <ChangeUsername />

        </div>
    </div>
    </div>
  );
}

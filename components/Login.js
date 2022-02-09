import React from 'react';
import Image from 'next/image';
import {useMoralis} from 'react-moralis'

export default function Login() {
    const{authenticate, authError}= useMoralis();

  return (
    <div className='bg-black relative '>

    <div className='z-50 flex flex-col absolute top-20 w-full h-4/6 
    items-center justify-cemter space-y-4'>
        {/*ProfileLogo */}
        <Image
        src='https://images.unsplash.com/photo-1635940960084-3794d7d85f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80'
        width={200} height={200}
        className='object-cover rounded-full' alt='profile logo'/>

        {/*Button */}
        <button  className='bg-yellow-400 rounded-lg
        p-5 font-bold'
        onClick={authenticate}>Enter Metaverse</button>
    </div>

    <div className='w-full h-screen'>
        {/*Background*/}
        <Image
        alt='back view '
        src='https://images.unsplash.com/photo-1628026552437-59305f353694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
        ObjectFit='cover'
        layout='fill'
        />
    </div>
    </div>
  );
}

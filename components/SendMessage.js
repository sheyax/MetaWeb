import React, { useState } from 'react';
import {useMoralis} from 'react-moralis'

export default function SendMessage({endOfMessagesRef}) {

    const {user, Moralis}= useMoralis();

    const[message, setMessage]= useState('');

    const SendMessage= (e) =>{
        e.preventDefault();

        if(!message) return;

        const Messages= Moralis.Object.extend('Messages');
        const messages= new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),
        }).then(
            (message) =>{

        }, (error) =>{
            console.log(error.message);
        });

        endOfMessagesRef.current.scrollIntoView({behavior:'smooth'});

        setMessage('');
    };

  return (
    <form className="flex w-11/12  fixed bottom-10 bg-black opacity-75 px-6 py-4
    max-w-2xl rounded-full border-4 border-white ">
        <input 
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        className=" flex-grow outline-none bg-transparent  
         placeholder-gray-500 pr-5 text-white" type="text"
         placeholder={`Enter a message ${user.getUsername()}...`}/>

        <button 
        onClick={SendMessage}
        className="font-bold text-indigo-500
        ">Send</button>
    </form>
  );
}

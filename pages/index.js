import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import {useMoralis} from 'react-moralis'
import Link from 'next/link'


export default function Home() {
const {isAuthenticated, logout}= useMoralis()

if(!isAuthenticated) return <Login />

  return (
    <div className=" relative flex min-h-screen flex-col items-center justify-center py-2 
    bg-[url('https://images.unsplash.com/photo-1628026552437-59305f353694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80')]
    bg-no-repeat
    bg-cover
    space-y-6">
      <Head>
        <title>Metaverse Demo 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <script src="../../../dist/aframe-master.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
      </Head>
<div className="item-center justify-center flex flex-col">
      <h1 className='text-white font-bold'>Welcome to the App</h1>

      <Link href='/chat'>
      <button className='rounded-lg mt-3 p-3
      bg-blue-400 text-white font-bold'>Go to chat</button>
      </Link>
      
      <button onClick={logout} 
      className='bg-red-500 p-3 rounded-lg 
      text-white mt-3 font-bold'>Logout</button>
      </div>
   
    
    </div>
  )
}

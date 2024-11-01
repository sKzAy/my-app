"use client"
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import "@/app/globals.css"
import Footer from './Footer'


const Cards = () => {
  const InputRef = useRef()
  const InputRef2 = useRef()


  const [player, setPlayer] = useState({
    "name": "granis",
    "steamid": "38142345",
    "rank": 37,
    "rankname": "Veteran",
    "points": 265149,
    "vip": 1,
    "firstseen": "2016-03-17T20:51:12.000Z",
    "lastplay": "2024-05-20T15:56:16.000Z",
    "playtime": 9751857,
    "mapscompleted": 762
  })
  const [player2, setPlayer2] = useState({
    "name": "pikzaso",
    "steamid": "921269561",
    "rank": 902,
    "rankname": "Casual",
    "points": 27736,
    "vip": 1,
    "firstseen": "2020-04-23T15:47:23.000Z",
    "lastplay": "2024-08-04T19:16:13.000Z",
    "playtime": 775138,
    "mapscompleted": 91
  })



// HANDLE CLICK 1
  const handleClick = () => {
    const inputValue = parseInt(InputRef.current.value, 10); // Ensure it's an integer
    if (inputValue > 0 && inputValue <= 300000) {
      fetchData(inputValue);
    } else {
      alert("Please enter a rank between 1 and 300000");
      InputRef.current.value = "";
    }
  };
  const handleClick2 = () => {
    const inputValue = parseInt(InputRef2.current.value, 10); // Ensure it's an integer
    if (inputValue > 0 && inputValue <= 300000) {
      fetchData2(inputValue);
    } else {
      alert("Please enter a rank between 1 and 300000");
      InputRef2.current.value = "";
    }
  };



  // FETCHING
  async function fetchData(rank) {
    try {
      const response = await fetch(`https://surfheaven.eu/api/rank/${rank}`);
      const data = await response.json();
      setPlayer(data[0]);
    } catch (error) {
      alert("Error, enter a approriate rank");
    }
    InputRef.current.value = ""
  }
  async function fetchData2(rank2) {
    try {
      const response = await fetch(`https://surfheaven.eu/api/rank/${rank2}`);
      const data = await response.json();
      setPlayer2(data[0]);
    } catch (error) {
      alert("Error, enter a approriate rank");
    }
    InputRef2.current.value = ""
  }



  // JSX


  return (
    <>
      <div className="parent bg-slate-900 h-[100vh] w-full pt-5">
        <div className='flex justify-center align-middle gap-4'>
         <Link href="/"> <button className='bg-orange-500 border-none rounded-full p-2 text-center text-white font-bold
          mb-4'>Profiles</button></Link>
         <Link href="/maps"> <button className='bg-orange-500 border-none rounded-full p-2 text-center text-white font-bold
          mb-4'>Map Comparison</button></Link>
        </div>
        <div className="both-cards-parent">
        <div className='both-cards flex justify-center align-middle gap-24'>
          
          <div className="Card pt-10 h-[70vh] w-[40vw] bg-gray-800 border-none rounded-xl">
            {/* SEARCHER */}

            <div className='search text-center'>
              <div className='flex align-middle justify-center'><img className='relative left-6' src="magnify.svg" width={20} alt="Not Found" /><input ref={InputRef} type="text" placeholder='Enter Player Rank' className='input text-center rounded-xl w-[15vw]' /><button onClick={handleClick} className='bg-orange-500 p-2 border-none rounded-full ml-3 text-white font-bold text-center'>Search </button></div>
            </div>
            {/* CARD 1 */}
            <div className='main-card flex justify-center align-middle pt-10'>
              <h1 className='font-bold text-orange-500 
                text-3xl' >Username: {player.name}</h1>
            </div>
            <p className=' font-bold text-center text-white text-xl'>Rank: {player.rank}</p>
            <p className=' font-bold text-center text-white text-xl'>Rank Name: {player.rankname}</p>
            <p className=' font-bold text-center text-white text-xl'>Points: {player.points}</p>
            <p className=' font-bold text-center text-white text-xl'>Maps Completed: {player.mapscompleted}</p>
            <p className=' font-bold text-center text-white text-xl'>VIP Status: {player.vip}</p>
            <p className=' font-bold text-center text-white text-xl'>First Played: {player.firstseen.substring(0,10)}</p>
            <p className=' font-bold text-center text-white text-xl'>Last Played: {player.lastplay.substring(0,10)}</p>
          </div>
        
          <div className="mb-4 Card pt-10 h-[70vh] w-[40vw] bg-gray-800 border-none rounded-xl">
            {/* SEARCHER */}

            <div className='text-center'>
              <div className='flex align-middle justify-center'><img className='relative left-6' src="magnify.svg" width={20} alt="Not Found" /><input ref={InputRef2} type="text" placeholder='Enter Player Rank' className='input text-center rounded-xl w-[15vw]' /><button onClick={handleClick2} className='bg-orange-500 p-2 border-none rounded-full ml-3 text-white font-bold text-center'>Search </button></div>
            </div>
            {/* CARD 2 */}
            <div className=' flex justify-center align-middle pt-10'>
              <h1 className='font-bold text-orange-500 
                text-3xl' >Username: {player2.name}</h1>
            </div>
            <p className=' font-bold text-center text-white text-xl'>Rank: {player2.rank}</p>
            <p className=' font-bold text-center text-white text-xl'>Rank Name: {player2.rankname}</p>
            <p className=' font-bold text-center text-white text-xl'>Points: {player2.points}</p>
            <p className=' font-bold text-center text-white text-xl'>Maps Completed: {player2.mapscompleted}</p>
            <p className=' font-bold text-center text-white text-xl'>VIP Status: {player2.vip}</p>
            <p className=' font-bold text-center text-white text-xl'>First Played: {player2.firstseen.substring(0,10)}</p>
            <p className='font-bold text-center text-white text-xl'>Last Played: {player2.lastplay.substring(0,10)}</p>
          </div>
          </div>



        </div>
       
          
          
        
      </div>
      <Footer />
    </>
  )
}

export default Cards

"use client"
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

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


  function handleClick() {
    let z = parseInt(InputRef.current.value)
    handleFetch(z)
  }
  function handleClick2() {
    let d = parseInt(InputRef2.current.value)
    handleFetch2(d)
  }

  async function handleFetch(rank) {
    let b = await fetch(`https://surfheaven.eu/api/rank/${rank}`)
    let c = await b.json()
    console.log(c)
    setPlayer(c)


  }
  async function handleFetch2(rank2) {
    let e = await fetch(`https://surfheaven.eu/api/rank/${rank2}`)
    let f = await e.json()
    console.log(f)
    setPlayer2(f)


  }



  return (
    <>
      <div className=" bg-slate-900 h-[100vh] w-[98.5vw] pt-5">
        <div className='flex justify-center align-middle gap-24'>
          <div className="Card1 pt-10 h-[70vh] w-[40vw] bg-gray-800 border-none rounded-xl">
            {/* SEARCHER */}

            <div className='text-center'>
              <div className='flex align-middle justify-center'><img className='relative left-6' src="magnify.svg" width={20} alt="Not Found" /><input ref={InputRef} type="text" placeholder='Enter Player Rank' className='text-center rounded-xl w-[15vw]' /><button onClick={handleClick} className='bg-orange-500 p-2 border-none rounded-full ml-3 text-white font-bold text-center'>Search 1</button></div>
            </div>
            {/* CARD 1 */}
            <div className=' flex justify-center align-middle pt-10'>
              <h1 className='font-bold text-orange-500 
                text-3xl' >Username: {player.name}</h1>
            </div>
            <p className=' font-bold text-center text-white text-xl'>Rank: {player.rank}</p>
            <p className=' font-bold text-center text-white text-xl'>Rank Name: {player.rankname}</p>
            <p className=' font-bold text-center text-white text-xl'>Points: {player.points}</p>
            <p className=' font-bold text-center text-white text-xl'>Maps Completed: {player.mapscompleted}</p>
            <p className=' font-bold text-center text-white text-xl'>VIP Status: {player.vip}</p>
            <p className=' font-bold text-center text-white text-xl'>First Played: {player.firstseen}</p>
            <p className=' font-bold text-center text-white text-xl'>Last Played: {player.lastplay}</p>
          </div>

          <div className="Card1 pt-10 h-[70vh] w-[40vw] bg-gray-800 border-none rounded-xl">
            {/* SEARCHER */}

            <div className='text-center'>
              <div className='flex align-middle justify-center'><img className='relative left-6' src="magnify.svg" width={20} alt="Not Found" /><input ref={InputRef2} type="text" placeholder='Enter Player Rank' className='text-center rounded-xl w-[15vw]' /><button onClick={handleClick2} className='bg-orange-500 p-2 border-none rounded-full ml-3 text-white font-bold text-center'>Search 2</button></div>
            </div>
            {/* CARD 1 */}
            <div className=' flex justify-center align-middle pt-10'>
              <h1 className='font-bold text-orange-500 
                text-3xl' >Username: {player2.name}</h1>
            </div>
            <p className=' font-bold text-center text-white text-xl'>Rank: {player2.rank}</p>
            <p className=' font-bold text-center text-white text-xl'>Rank Name: {player2.rankname}</p>
            <p className=' font-bold text-center text-white text-xl'>Points: {player2.points}</p>
            <p className=' font-bold text-center text-white text-xl'>Maps Completed: {player2.mapscompleted}</p>
            <p className=' font-bold text-center text-white text-xl'>VIP Status: {player2.vip}</p>
            <p className=' font-bold text-center text-white text-xl'>First Played: {player2.firstseen}</p>
            <p className=' font-bold text-center text-white text-xl'>Last Played: {player2.lastplay}</p>
          </div>



        </div>
      </div>
    </>
  )
}

export default Cards
import React from 'react'
import { useEffect, useState } from 'react';
import { BsFillDice5Fill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs"

function Advice() {
  const [advice, setAdvice] = useState(null)
   const fetchUrl = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) =>

          setAdvice(data)
        ) 
    }
  console.log(advice)

  useEffect(() => {
    fetchUrl()
  }, [])
  



  return (
    <div className='mx-auto mt-20 shadow-md max-w-lg rounded-2xl text-center pt-5 pb-20  mt-auto mb-auto m bg-slate-900 '>

      <div className=" ">

        <div className="text-green-300">Advice <span className=''>@{advice?.slip?.id}</span></div>
        <div className="px-4 py-10 font-medium text-lg max-w-sm text-center mx-auto break-words text-gray-400">"<span>{advice?.slip?.advice}</span>"</div>

        <div className=" mb-10  mx-auto px-10">
        <img src="..\images\pattern-divider-desktop.svg" alt="H" className='h-5 w-full'/>
        </div>

      </div>
      <div className="mx-auto -mb-28 bg-green-300 rounded-full  text-center w-fit p-4" onClick={fetchUrl}>
        <BsFillDice5Fill size={26} className="text-black m-auto" />
      </div>
    </div>
  )
}

export default Advice

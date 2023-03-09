import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown} from "react-icons/io"
import { IoIosArrowUp} from "react-icons/io";
import { FaFacebookSquare} from "react-icons/fa";
import { FaTwitterSquare} from "react-icons/fa";
import { FaYoutubeSquare} from "react-icons/fa";
import { FaDiscord} from "react-icons/fa";
import { MdEmail} from "react-icons/md";



function Footer() {
const [selected,setSelected]=useState(null)

const info=[
{id:'1',title:'Support', 
data:['Contact Us', 'FAQs', 'Download Oath Form','Download Registration Form']},
{id:'2',title:'Valdymas', data:['Programs','Newsletter', 'About', 'Blog','Project Read']}
]

function toggleAccordion(i){
    if(selected=== i){
      return setSelected(null)
    }
    setSelected(i)
}

const boxTwo= info.map((item,i)=>{
    return <div key={item.id} className='sm:mt-3 border border-t-neutral-500 border-b-neutral-500 border-l-neutral-900 border-r-neutral-900 sm:-mx-3'>
      <div className={`flex justify-between cursor-pointer border-left-black content-center sm:pt-2`} onClick={()=>toggleAccordion(i)}  >
         <h2 className='text-gray-300 font-medium text-xl mb-4 sm:ml-4 sm:text-sm sm:font-medium'>{item.title}</h2>
         {selected===i?<IoIosArrowUp size={20} />:<IoIosArrowDown size={20} />}
      </div>
             <div className={`px-6 ${selected===i?'h-48 transition-all duration-2000 ease-linear overflow-hidden':' overflow-hidden h-0 transition-all duration-2000 ease-linear'}`}>
                {item.data.map((item,i)=>{
                    return <Link className=' text-sm block mt-3' key={i}>{item}</Link>
               })
                }
             </div>
        </div>
})
  return (
    <div className='bg-neutral-900 text-white'>
{/* General Blocks Wrapper */}
        <div className="foot-wrapper lg:flex lg:justify-between sm:block ">
{/* Between Valdymas block and Info block */}
      <div className="sm:px-5 px-20 py-16 flex justify-between lg:gap-10 sm:block sm:py-6 ">

        <div className="box-1 lg:-mt-5 lg:h-20 sm:text-center">
        <h1 className='sm:text-lg mb-3 footer-head text-2xl'>VALDYMAS</h1>
    <div className="sm:hidden flex justify-between">
<FaFacebookSquare size={26} className="cursor-pointer"/>
 <FaTwitterSquare  size={26} className="cursor-pointer"/>
 <FaYoutubeSquare  size={26} className="cursor-pointer"/>
 <FaDiscord  className="cursor-pointer" size={26}/>
   </div>
        </div>

        <div className="flex gap-8 sm:block">
            {boxTwo}
        </div>

</div>
{/* Box 3 */}
<div className="sm:px-5 lg:mr-10 sm:-mt-10">

 <div className=" form ">
    <form action=''>
        <div className="text-gray-300 flex gap-4 mb-10 sm:justify-center items-center">
            <MdEmail size={26}/>
            <h2 className='text-md font-medium sm:text-sm text-white'>Stay Up To Date On The Latest From Valdymas</h2>
        </div>
        <div className="flex gap-6 mb-4">
            <input type="text" className=" bg-neutral-900 py-3 placeholder-gray-500 bg-black border sm:w-full
            border-b-neutral-500 border-t-neutral-900  border-r-neutral-900 border-l-neutral-900 outline-none " placeholder='First Name ' />
            <input type="text" className="bg-neutral-900 py-3 placeholder-gray-500 bg-black border sm:w-full
             border-b-neutral-500 border-t-neutral-900  border-r-neutral-900 border-l-neutral-900
            shadow-md outline-none " placeholder='Last Name'/>
        </div>
        <input type="email" className="bg-neutral-900 py-2 placeholder-gray-500 bg-black shadow-md border 
         border-b-neutral-500 border-t-neutral-900  border-r-neutral-900 border-l-neutral-900 outline-none w-full" placeholder='Email'/>
         <div className='py-3 border border-t-neutral-900  border-r-neutral-900 border-l-neutral-900 border-b-neutral-500'>
         <p>
          <label htmlFor="agree">
         <input id='agree'type="checkbox" className=' mr-2'/><span className="text-gray-300 sm:text-xs">I have read and accepted the <Link className='underline' to =''>school policy</Link></span>
        </label>
        </p>
         </div>

         <div className="sm:text-center ">
         <input type="submit" value="Sign Up" className='sm:w-full bg-red-800 py-3 cursor-pointer px-20 mt-3 sm:text-sm' />
         </div>
    </form>
 </div>


    <div className="foot-icons flex gap-4 lg:hidden justify-center my-4">
<FaFacebookSquare size={25} className="cursor-pointer"/>
 <FaTwitterSquare  size={25} className="cursor-pointer"/>
 <FaYoutubeSquare  size={25} className="cursor-pointer"/>
        </div>

 </div>
 

  
</div>

<hr />
<div className='sm:text-sm py-5 px-4 footer-foot text-gray-300'>@2023 Valdymas College. <span className='block'>
All Rights Reserved
  </span></div>




    </div>
  )
}

export default Footer

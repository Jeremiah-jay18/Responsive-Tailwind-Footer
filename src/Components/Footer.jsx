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
    return <div key={item.id} className='sm:mt-3 border border-l-black border-r-black sm:-mx-3'>
      <div className={`flex justify-between cursor-pointer border-left-black content-center sm:pt-2`} onClick={()=>toggleAccordion(i)}  >
         <h2 className='font-medium text-xl mb-4 sm:ml-4'>{item.title}</h2>
         {selected===i?<IoIosArrowUp size={26} />:<IoIosArrowDown size={26} />}
      </div>
             <div className={`px-4 ${selected===i?'h-44 transition-all duration-2000 ease-linear':' overflow-hidden h-0 transition-all duration-2000 ease-linear'}`}>
                {item.data.map((item,i)=>{
                    return <Link className='block mt-3' key={i}>{item}</Link>
               })
                }
             </div>
        </div>
})
  return (
    <div className='bg-black text-white'>
{/* General Blocks Wrapper */}
        <div className="foot-wrapper lg:flex lg:justify-between sm:block ">
{/* Between Valdymas block and Info block */}
      <div className="sm:px-5 px-20 py-16 flex justify-between lg:gap-10 sm:block sm:py-6 ">

        <div className="box-1 lg:-mt-5 lg:h-20 sm:text-center">
        <h1 className='mb-3 footer-head text-2xl'>VALDYMAS</h1>
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
        <div className="flex gap-4 mb-10 sm:justify-center">
            <MdEmail size={26}/>
            <h2 className='text-md font-medium'>Stay Up To Date On The Latest From Valdymas</h2>
        </div>
        <div className="flex gap-6 mb-4">
            <input type="text" className=" py-3 placeholder-gray-500 bg-black border sm:w-full
            border-b-white border-t-black  border-r-black border-l-black outline-none " placeholder='First Name ' />
            <input type="text" className=" py-3 placeholder-gray-500 bg-black border sm:w-full
             border-b-white border-t-black  border-r-black border-l-black
            shadow-md outline-none " placeholder='Last Name'/>
        </div>
        <input type="email" className=" py-2 placeholder-gray-500 bg-black shadow-md border 
         border-b-white border-t-black  border-r-black border-l-black outline-none w-full" placeholder='Email'/>
         <div className='py-3 border border-t-black  border-r-black border-l-black'>
         <p>
          <label htmlFor="agree">
         <input id='agree'type="checkbox" className='mr-2'/>I have read and accepted the school policy
        </label>
        </p>
         </div>

         <div className="sm:text-center ">
         <input type="submit" value="Sign Up" className='sm:w-full bg-red-700 py-3 cursor-pointer px-20 mt-3 ' />
         </div>
    </form>
 </div>


    <div className="foot-icons flex gap-4 lg:hidden justify-center my-4">
<FaFacebookSquare size={30} className="cursor-pointer"/>
 <FaTwitterSquare  size={30} className="cursor-pointer"/>
 <FaYoutubeSquare  size={30} className="cursor-pointer"/>
        </div>

 </div>
 

  
</div>

<hr />
<div className='py-5 px-4 footer-foot'>@2023 Valdymas College. All Rights Reserved</div>




    </div>
  )
}

export default Footer

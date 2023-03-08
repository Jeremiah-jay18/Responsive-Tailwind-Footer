import React, { useEffect, useState } from 'react'
import { HiMenuAlt3} from "react-icons/hi";
import {RiSettings4Line} from 'react-icons/ri'
import {TbReportAnalytics} from 'react-icons/tb'
import{MdOutlineDashboard} from 'react-icons/md'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {FiMessageSquare,FiFolder,FiShoppingCart} from 'react-icons/fi'

function Home() {
  const menus=[
    {
    name:'Dashboard', link:'/' ,icon:MdOutlineDashboard  
  },
  {
    name:'User', link:'/' ,icon:AiOutlineUser  
  },
  {
    name:'Messages', link:'/' ,icon:FiMessageSquare  
  },
  {
    name:'Analytics', link:'/' ,icon:TbReportAnalytics,margin:true
  },
  {
    name:'File Manager', link:'/' ,icon:FiFolder
  },
  {
    name:'Cart', link:'/' ,icon:FiShoppingCart 
  },
  {
    name:'Saved', link:'/' ,icon:AiOutlineHeart, margin:true
  },
  {
    name:'Setting', link:'/' ,icon:RiSettings4Line
  }

];
const [open,setOpen]=useState({})
    
    return(
        <section className="flex gap-6">

            <div className={`bg-[#0e0e0e] min-h-screen ${open?'w-72':'w-16'} text-gray-100 px-4 trans`}>
                
                <div className="py-3 flex justify-end">
                <HiMenuAlt3 size={26} className="cursor-pointer " onClick={()=>setOpen(!open)}/>
                </div>

                <div className='mt-4 flex flex-col gap-6 relative'>
                  {menus?.map((menu,index)=>{
                     return <Link key={index} to={menu?.link} 
                     className={`${menu?.margin && 'mt-5'}  group flex gap-3.5 text-sm font-medium hover:bg-gray-800`}>
               <div>{React.createElement(menu?.icon,{size:20})}</div>

               <h2
                     style={{
                      transitionDelay:`${index+3}00ms`
                     }}
                      className={`whitespace-pre ${!open && 'opacity-0 translate-x-20 overflow-hidden'} duration-500`}>
                      {menu?.name}    
                </h2>
                <h2 className={`${ open && 'hidden'} absolute left-14 bg-white font-semibold 
                whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 g
                group-hover:py-1 group-hover:duration-100 group-hover:w-fit
                `}>{menu?.name}</h2>
                   </Link>
                  })
                   
}
              
                </div>

            </div>

          <div className="m-3 text-xl text-gray-900 font-semibold">
            REACT NAVBAR WITH TAILWIND
          </div>
        </section>
    )
      }
  

export default Home

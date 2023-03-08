import React from 'react'

function SignUp() {
  return (
    <div>
    {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="shrink-0">
      <img className="h-12 w-15" src="..\images\chitchat.png" alt="ChitChat Logo"/>
    </div>
    <div>
      <div className="text-xl font-medium text-black">ChitChat</div>
      <p className="text-slate-500">You have a new message!</p>
    </div>
  </div> */}

<br />

    <div className='wrapper'>
    
     <div className="form-block">
      <form action="">
        <h2 className='message'>Sign In</h2>

        <span>Username or Email</span>
          <input type="email"className='' />

          <span>Password</span>
          <input type="password"className='' />

          <div className='end'><button>Sign in</button>
        <span>Forgot Your Password?</span>
        </div>
       
      </form>

     </div>
     <div className="foot">
        <span>Don't have an account?</span>
        <button>Sign Up</button>
      </div>
         
    </div>
<br />
    <div className='shadow-xl border-black px-8 py-9 max-w-sm mx-auto rounded-lg'>
    
    <div className="">
     <form action="" className=''>
       <h2 className='text-2xl font-bold'>Sign In</h2>

       <span className='block mt-4'>Username or Email</span>
         <input type="email"className='shadow rounded w-full focus:outline-none focus:shadow-outline text-gray-700' />

         <span className='block mt-4'>Password</span>
         <input type="password"className='rounded shadow w-full focus:outline-none focus:shadow-outline text-gray-700' />

         <div className='flex gap-4 justify-between items-center mt-6'>
        <button className='bg-blue-700 p-3 w-24 rounded-3xl text-white'>Sign in</button>
       <span className='font-bold text-sm cursor-pointer'>Forgot Your Password?</span>
       </div>
      
     </form>

    </div>
    <div className="mt-8">
       <span className='block text-center font-bold'>Don't have an account?</span>
       <div className='text-center'>
       <button className='font-medium underline'>Sign Up</button>
       </div>
     </div>
        
   </div>
<br /><br />

    </div>
  )
}

export default SignUp

import React from 'react'
 

export default function Logindemo() {
  return (
    <div className=' h-screen w-screen bg-cover bg-center bg-[url("https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
      <div className='flex flex-col items-center justify-center bg-black/60 h-screen '>
     
            <h1 className=' text-4x1 text-white font-bold mb-5'> Login</h1>
            <form className='space-y-5'>
                <div>
                    <input className='bg-transparent text-white border border-white w-[300px] px-3 py-1 rounded-full' required type="email" placeholder='Eamil' />
                    <br/>
                    </div>
                    <div>
                    <input className='bg-transparent text-white border border-white w-[300px] px-3 py-1 rounded-full' required type="password" placeholder='password' />
                    </div>
                    <div className='border border-white py-2 hover:bg-white text-black font-semibold rounded-full hover:text-black duration-300  text-center items-center justify-center '>
                        <button>Submit</button>
                    </div>
            </form>
            
      </div>
    </div>
  )
}

 

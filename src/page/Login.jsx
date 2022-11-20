import React from 'react'
import {FaFacebookF, FaGoogle, FaInstagram, FaRegEnvelope, FaLock} from 'react-icons/fa'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">
     
     <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
     <div className='bg-white rounded-2xl   shadow-2xl flex w-2/3 max-w-4xl'>
{/* ................................................................................................................ */}
      <div className='w-3/5 p-5'>
          <div className='text-left font-bold text-2xl' >
            <span className='text-green-600'>W</span>M
          </div>
          <div className='py-5'>
          <div className='text-3xl font-bold text-green-600 mb-2'>Login to Account</div>
          <div className=' border-2 w-10 border-green-600 inline-block mb-2 '></div>
          </div>

          <div className='flex justify-center my-2'>
      <a href='/waste-management/Demo#' className='hover:animate-pulse border-2 border-gray-200 rounded-full p-3 mx-1'>
      <FaFacebookF className='text-sm'/>
      </a>
      <a href='/waste-management/Demo#' className='hover:animate-pulse border-2 border-gray-200 rounded-full p-3 mx-1'>
      < FaInstagram className='text-sm'/>
      </a>
      <a href='/waste-management/Demo#' className=' hover:animate-pulse border-2 border-gray-200 rounded-full p-3 mx-1'>
      <FaGoogle className='text-sm'/>
      </a>
    </div>
    <p className='text-gray-400 my-3'>or use your email account</p>
    <div className='flex flex-col items-center '>
      <div className=' bg-gray-100 w-64 p-2 flex items-center mb-3'>
         <FaRegEnvelope className='text-gray-400 m-2 '/>
          <input className='mx-2 outline-none bg-gray-100 text-sm flex-1' type="email" name="email" placeholder='Email'></input>
      </div>
      <div className=' bg-gray-100 w-64 p-2 flex items-center mb-3'>
         <FaLock className='text-gray-400 m-2 '/>
          <input className='mx-2 outline-none bg-gray-100 text-sm flex-1' type="password" name="password" placeholder='Password'></input>
      </div>
      <div className='flex w-64 justify-between mb-5'>
        <label className='flex items-center text-xs'>
          <input type="checkbox"/> Remember me
        </label>
        <a href='/waste-management/main' className='text-xs'>Forgot password</a>

      </div>
      <a href="/waste-management/Login" className='border-2 border-green-600 rounded-full px-12 py-2 inline-block hover:bg-green-600  hover:text-white ' >
            Login
            </a>
            {/* <button className='border-2 border-green-600 rounded-full px-12 py-2 inline-block  hover:bg-green-600  hover:text-white'>
              Login
            </button> */}

    </div>



        </div>
{/* ................................................................................................................ */}
     

      <div className='w-2/3 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'> 
        <h1 className=' text-3xl font-bold mb-2'>Hello, Friends!</h1>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className='mb-10'> Fill up persional information and Join us</p>
          <a href="/waste-management/Signup" className='border-2 border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-600 ' >
            Sign up
            </a>
            {/* <button   className='border-2 border-white rounded-full px-12 py-2 inline-block hover:bg-white hover:text-green-600 ' >
              Sign up
            </button> */}
        
{/* ................................................................................................................. */}

        </div>
      </div>


       
     </main>


    </div>
      
  )
}

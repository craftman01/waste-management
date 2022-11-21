import React,{useState} from 'react'
import {  FaRegEnvelope, FaLock, FaGoogle, FaInstagram, FaFacebookF} from 'react-icons/fa'
import Nav1 from '../componets/Nav1'
import {UserAuth} from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
 


export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const {createUser} = UserAuth();
  const {signInWithGoogle} = UserAuth();



  const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')
      try{
              await createUser(email, password);
              navigate('/Account')
      }catch(e){
          setError(e.message)
          console.log(e.message)
      }

  }

    




  return (

            <div>
                <Nav1/>

    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-600 ">
     
         <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            
         <div className=' bg-white  rounded-2xl p-5   shadow-2xl   '>
         {/* backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 */}

        
               
           

         <div className='py-5'>
         <div className=' flex text-3xl font-bold text-green-600 mb-2'>Sign up to Account</div>
         <div className=' border-2 w-10 border-green-600 inline-block mb-2 '></div>
            
            </div>
            <div className='flex justify-center my-2'>

            <a href='/waste-management/Demo#' className='hover:animate-pulse border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaFacebookF className='text-sm'/>
            </a>
            <a href='/waste-management/Demo#' className='hover:animate-pulse border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaInstagram className='text-sm'/>
            </a>
            <a   className=' hover:animate-pulse border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaGoogle onSubmit={handleSubmit} onClick={signInWithGoogle} className='text-sm'/>
            </a>

            </div>

            <span className='text-gray-400 text-sm my-3'>Alredy have an account? <a className=' text-blue-500' href='/waste-management/Login'>Login</a></span>
            <br/>
            <div className='border-2 w-10 border-gray-400 inline-block mb-2' />

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col items-center'>
                <div className=' bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-gray-400  '/>
                <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'
                className=' mx-2 outline-none bg-gray-100 text-sm flex-1' />
                </div>

                <div className=' bg-gray-100 w-64 p-2 flex items-center mb-3'>
                < FaLock className='text-gray-400  '/>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'
                className=' mx-2 outline-none bg-gray-100 text-sm flex-1' />
                </div>

                <div className='flex w-64 justify-between mb-5'>
                 
                 <label className='flex items-center text-xs'>
                       <input type="checkbox"/> Remember me
                 </label>
                 <a href='/waste-management/demo' className='text-xs'>Forgot password</a>

                </div>

                <button className='border-2 border-green-600 rounded-full px-12 py-2 inline-block  hover:bg-green-600  active:bg-green-700  focus:outline-none  focus:ring  focus:ring-green-300  hover:text-white'>
                  Sign up
                </button>

                </div>
            </form>
            </div>
 

           

           

         

        </main>
    </div>
    </div>
  )

}
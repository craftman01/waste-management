
import React from 'react'
import Nav from '../componets/Nav'
// import Button from '../componets/Button'
import { UserAuth } from '../contexts/AuthContext'
  
    import { useNavigate } from 'react-router-dom'

 
const Account = ()=>{
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async ()=>{
                try{
                        await logout()
                         navigate('/signup')
                         console.log('you are loged out')
                } catch (e) {
                    console.log(e.message   )

                }
    }

      

 
   return (
     <div>
       <Nav/>
       <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400 ">
      
     <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
     <div className=' bg-white  rounded-2xl p-5   shadow-2xl   '>
        <div className='flex flex-col items-center justify-center'>
          <p> User Email:   {user?.email}<br/>  </p>

          <div className=' text-bold  '>         User Name:  </div>
                    <span className=' text-bold text-xl text-green-600'>{localStorage.getItem("name")}  </span> 
                  



              <div className='flex flex-col items-center justify-center'>

             

                <img  src={localStorage.getItem("photo")} alt=""/> 

               


              </div>
                        
          
         
           
            <br/> 
        


            <button className=' text-blue-500' onClick ={handleLogout}>
                LogOut
            </button>
        </div>

     </div>
                

            </main>
        </div>

     </div>
   )
 }
 export default Account;
 
 
 
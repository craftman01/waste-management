import React,{ useState} from 'react'
import Button from './Button';
// import {GiHamburgerMenu} from 'react-icons/gi'

 
 



const Nav = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACTS",link:"/"},
    ]
    
        let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>

        <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>

        <div className='  font-bold text-2xl cursor-pointer flex items-center ' >

        <span className='text-green-600'>W</span>M
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>


                {/* <GiHamburgerMenu/> */}

                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>


            </div>
            
                    
                 
             
<ul className={`md:flex md:items-center md:pd-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl0 pl-9 transition-all duration-500 ease-in ${open? 'top-10':"top-[-490px]"  } md:opacity-100  `}>
     {
Links.map((link)=>(

    <li  key={link.name} className='md:ml-8 text-xl md:my-0 my-7' >
        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
    </li>

))
}
        <Button>
            Get Started
        </Button>
        
</ul>

        </div>
      
    </div>
  )
}

export default Nav

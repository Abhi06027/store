import React from 'react'


const Nav2 = () => {
    return (
        <div className="  h-14 bg-white flex justify-evenly text-xs px-10 w-full text-black   " >
         
         
         <div className=" flex gap-10 items-center font-bold text-lg   ">
         
        
         <div className="   "   >   Estore.    </div> 
          </div>
         
         
         
          <div className=" flex gap-3 items-center cursor-pointer text-xs  "   >
          <div className="   "   >  Home    </div>  
          <div className="   "   > Category      </div>  
          <div className="   "   >   Latest      </div>  
          <div className="   "   >  Blog    </div>  
          <div className="   "   >  Pages    </div>  
          <div className="   "   >  Contact    </div>  
         </div>   
          
          
         <div className="  relative flex items-center text-xs  gap-10  " >
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-3 ml-32  font-bold   absolute    " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
          
        <input className=" text-xs py-1 pl-2 w-30  border border-gray-300   rounded-full placeholder-  " type="text" placeholder="Search product" />         
          
          </div>
        
        
        <div className=" flex justify-center items-center  cursor-pointer    "   >
        <div className=" flex justify-center items-center   bg-white border border-gray-300      h-8 w-8  rounded-full   "    >
         
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
   </svg>  

   </div>
   </div> 
   <div className=" flex justify-center items-center   "   >
        <div className=" flex justify-center items-center cursor-pointer    bg-white border border-gray-300   h-8 w-8  rounded-full   "    >
         
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>

   </div>
   </div> 

   <div className=" flex justify-center items-center   "   >
        <div className=" flex justify-center items-center cursor-pointer   bg-blue-700 text-white  rounded-full py-2 px-5 hover:bg-red-500 "    >
         
        <div className="   "   >  Sign In     </div>  

   </div>
   </div> 
          
          </div>
          
          
         


        
    )
}

export default Nav2
import React from 'react'

const Content = () => {
    return (
        <div className=' flex   justify-center      bg-secondary text-white'>
        
        <div className=" w-2/5 mt-6 ml-20   " >
        <img className="  "  src="./images/girl.png " alt=""/> 
        </div>
        
        <div className=" flex flex-row  w-2/5 text-5xl ml-10    " >
        <div className=" flex  flex-col justify-center         "  >
        <p className=" text-blue-600 text-xl italic   " >60% discount</p> 
        <p className=" text-black font-bold   " >Winter</p> 
        <p className=" text-black font-bold    "   >Collection</p> 
        
        <p className=" text-black text-xs italic py-2 pb-6   "   > Best Both Collection By 2021!</p> 
        <p className="  bg-blue-500 rounded-full  text-white  py-2 w-24 text-center  text-xs  hover:bg-red-500  "   >Shop Now</p> 
      
        </div>
        </div>
      </div>
     
    )
}

export default Content
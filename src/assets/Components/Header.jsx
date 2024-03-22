import React from "react";

export default function Header() {

    return (
        <>

            <h2 class="flex flex-row flex-nowrap items-center mt-5 "> 
                    
                <span class="flex-grow block border-t border-black "> </span>
                <span class="flex  mx-4 px-4 py-2.5 text-4xl rounded-2xl leading-none font-medium bg-black text-white hover:shadow-lg hover:shadow-blue-300 transition duration-200 hover:scale-110 ">
                 Muzicly  <img src="/Images/listen.png" className=" ml-2 bg-transparent w-10 h-10 "  /> 
                </span>
                
                <span class="flex-grow block border-t border-black"></span>
               


            </h2>

        </>
    )
}
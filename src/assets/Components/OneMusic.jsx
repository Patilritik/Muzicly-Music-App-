import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"





export default function OneMusic(props) {


    const navigate = useNavigate();
    const handleClick = () => {
        // console.log(props.song);
        console.log(props.song)
        // console.log(location)
        navigate(props.song)
        // navigate(props.song, { replace: true });
    }


    return (
        <>


            <label
                class="font-bold text-xl w-full mx-auto mt-10 bg-transparent text-black min-w-sm max-w-2xl flex flex-col md:flex-row items-center  border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300     duration-500 group overflow-hidden relative  bg-neutral-800 text-neutral-50 p-4  justify-evenly"
                for="search-bar">

                <div
                //   class="w-96 h-64 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly"
                >
                    <div
                        class="absolute blur duration-500 group-hover:blur-none w-30 h-50 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                    ></div>
                    <div
                        class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                    ></div>
                    <div
                        class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                    ></div>
                    <div
                        class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-y-24 group-hover:-translate-x-60  left-48"
                    ></div>
                    <div class="z-10 flex flex-col justify-evenly w-full h-full">


                    </div>
                </div>

                <div id="search-bar" placeholder="your keyword here" onClick={handleClick}
                    class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-none cursor-pointer" >
                    {props.song}

                </div>

                <button onClick={handleClick}
                    class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                    <div class="relative">


                        <div
                            class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            <svg class="opacity-0  w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>



                        <div class="animate-arrowanimation flex items-center transition-all opacity-1 valid:"><span
                            class="text-sm font-semibold whitespace-nowrap truncate mx-auto">

                            <svg class="hover:translate-x-2 ease-in-out duration-300 h-8 w-8 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
                        </span>
                        </div>



                    </div>

                </button>


            </label>





        </>
    )

}

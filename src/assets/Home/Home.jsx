
import React from "react"
import ArtistCard from "../Components/ArtistCard"
import Header from "../Components/Header"
export default function Home(){

    return (
        <>
        <Header/>
        <h1 className="font-philosopher text-center mt-10 text-white text-3xl font-bold">Choose Your <span className="inline-block animate-nameChangeAnimation bg-violet-700 hover:border-red-400 hover:shadow-lg hover:shadow-violet-900 rounded-md border-2 p-2">Singer 
        </span >
        </h1>
         <div className='flex flex-wrap justify-around my-20'>
            {/* <ArtistCard  name= "Arijit-Singh" image="/src/assets/Images/download.jpg"/> */}
            <ArtistCard  name= "Arijit-Singh" image="../../../static/Images/download.jpg"/>
            <ArtistCard  name= "Atif Aslam" image="../../../static/Images/Atif.jpg"/>
            <ArtistCard  name= "Jubin Nautiyal" image="../../../static/Images/JUBIN.jpg"/>
            <ArtistCard  name= "Udit Narayan" image="../../../static/Images/udit.jpg"/>
            <ArtistCard  name= "Sukhwinder Singh" image="../../../static/Images/sukhwinder.jpg"/>

         </div>
        </>
    )
}
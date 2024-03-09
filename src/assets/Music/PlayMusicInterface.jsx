import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import Header from '../Components/Header';


function PlayMusicInterface(props) {
    const audioRef = useRef(null); // reference the audio 
    const [toogleMusic, setToggleMusic] = useState(false); // false means music is pause
    const [width, setWidth] = useState(0) // for maintaining width of the music progress bar 
    const [sideBar, setSidebar] = useState(false) // handling sidebar 
    const [muteBtn, setMuteBtn] = useState(false) //Song is not muted
    const [time, setTime] = useState("0:00 "); // handling current time of song 
    const [mySongduration, setSongDuration] = useState(props.time) // setting duration of song
    const widthRef = useRef(0); // used when click on progress bar 

    // const history = useHistory();

    // const handleClick = () => {
    // //       //     /Arijit-Singh/Kesariya
    // //     // const { singer, name } = props;
    // //     // console.log(name);
    // //     // // const newRoute = `/${encodeURIComponent(singer)}/${encodeURIComponent(name)}`;
    // //     // navigate(`${encodeURIComponent(singer)}/${encodeURIComponent(name)}`, { replace: true })

    // //     // console.log(newRoute);
    // //     // navigate(`${newRoute}`);

    // //     // navigate()

    // console.log(location.pathname)

    // }





    // when click on start over button 
    const startOver = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setToggleMusic(true)
        setWidth(0)
    }



    //On mute  
    const clickHander = () => {
        console.log('in set muted ')
        console.log(audioRef.current.muted)// false means music is muted else true -> playing

        if (muteBtn) { // if music is already muted then volume up 
            audioRef.current.muted = false // To mute it
            setMuteBtn(false)
        }
        else {
            audioRef.current.muted = true;
            setMuteBtn(true)
        }

    }


    // controlling progress of song  
    const setDuration = (e) => {
        let duration = audioRef.current.duration
        console.log(audioRef.current.currentTime)
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / widthRef.current.offsetWidth) * duration)
        audioRef.current.play();
        setToggleMusic(true)
        setWidth(Math.floor((audioRef.current.currentTime * 100) / duration))
    }


    // Handling the play pause 
    const PlauPauseButton = () => {
        // To set Time duration of song
        let SongDuration = audioRef.current.duration;
        const SongMinutes = Math.floor(SongDuration / 60)
        const SongSeconds = Math.floor(SongDuration % 60)
        setSongDuration(`${SongMinutes} : ${SongSeconds < 10 ? "0" : ""} ${SongSeconds}`)


        // As the time updates on playing the song , Width and current time in time state updating regularly  
        audioRef.current.ontimeupdate = (e) => {
            let duration = audioRef.current.duration;
            console.log("Im duration ", audioRef.current.duration)
            console.log("I m current time ", Math.floor(audioRef.current.currentTime))
            setWidth(Math.floor((audioRef.current.currentTime * 100) / duration))
            if (audioRef.current.ended) {
                console.log("Song ended")
                setWidth(0)
                setToggleMusic(false)
            }
            let currentTime = audioRef.current.currentTime;
            const minutes = Math.floor(currentTime / 60)
            const second = Math.floor(currentTime % 60);
            setTime(`${minutes}:${second < 10 ? "0" : ""}${second}`)

        }

        if (toogleMusic == false) { // music is pause user wants to play it
            audioRef.current.play();
            setToggleMusic(true)
            console.log(toogleMusic)
           

        }
        else {//music is playing and user want to pause it
            audioRef.current.pause();
            setToggleMusic(prevToggleMusic => !prevToggleMusic)
            // audioRef.current.currentTime = 0; // Start Again
            console.log("in pause ", audioRef.current.muted)
        }
    };








    return (
        <div>



            {/* sidebar */}

            <div className={sideBar ? " duration-1000 z-10 top-0 left-0 w-[50vw] bg-gradient-to-br from-purple-900 via-pink-600 to-blue-500 text-white absolute h-full bg-cover bg-transparent" : "duration-1000 ease-in-out z-10 top-0 left-0 w-[5vw] bg-transparent text-white fixed h-full "}>
                {sideBar ? <Header /> : ""}

                <button onClick={() => setSidebar(!sideBar)} className={sideBar ? "fixed my-12 mx-2 " : " my-12 mx-2"} >

                    <img src={sideBar ? '/src/assets/Images/back.png' : '/src/assets/Images/fast-forward-double-right-arrows-symbol.png'} className={sideBar ? 'w-auto h-10  max-w-full animate-arrowanimation' : " absolute right-0 w-auto h-10  max-w-full animate-arrowanimation"} />

                </button>


                {{ sideBar } ? <div className={sideBar ? " " : 'hidden '}></div> : " "}

                <h2 className={sideBar ? " mt-20 text-4xl text-center font-semibold text-white " : "hidden"} >

                   

                    <div className="border-black border-2  bg-gradient-to-br from-purple-900 via-pink-600 to-blue-500  m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 block rounded-lg bg-white dark:bg-surface-dark">

                        <img className="hover:shadow-sm hover:shadow-blue-300 transition duration-200 hover:scale-110 rounded-full small:hidden p-5 m-auto" src={props.Imgsrc} alt="Song Image" />
                        <div className="text-black p-6">
                            <h1 className="mb-2 text-2xl font-bolder">Song Details</h1>
                            <p className="text-center mb-4 text-xl small:text-sm  md:text-xl">


                                <span className="font-bolder"> Song Name : </span>
                                <span className='font-light'>
                                    {props.name}
                                </span><br/>

                                <span className='font-bolder'> Singer : </span>

                                <span className='font-light'>
                                    {props.singer}
                                </span><br/>

                                <span className='font-bolder'> Song Duration : </span>

                                <span className='font-light'>
                                    {mySongduration}
                                </span>
                            </p>
                        </div>
                    </div>









                    {/* onClick={handleClick} */}

                    {/* {props.singer === "Atif Aslam" ? <Atif /> : ""} 

                    {props.singer === "Arijit Singh" ? <Arijit /> : ""}

                    {props.singer === "Jubin Nautiyal" ? <Jubin /> : ""}
                    {props.singer === "Udit Narayan" ? <Udit /> : ""}
                    {props.singer === "Sukhwinder Singh" ? <Sukhwinder /> : ""}  */}


                    {/* trial work  */}


                    {/* <Atif/> */}

                </h2>
            </div>




            <div class="min-h-screen  flex flex-col items-center justify-center">

                <div class="relative max-w-xl w-full h-36 bg-white rounded-lg shadow-lg mb-32 overflow-visible">
                    <div class=" absolute inset-0 rounded-lg overflow-hidden bg-black-200">
                        <img src={props.Imgsrc} alt="" />
                        <div class="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black">

                        </div>
                    </div>



                    <div class="absolute flex space-x-6 transform translate-x-6 translate-y-8 ">
                        <div className={toogleMusic ? "w-36 h-36  shadow-lg overflow-hidden rounded-full animate-spin" : "w-36 h-36  shadow-lg overflow-hidden rounded-full"}>
                            <img src={props.Imgsrc} alt="" />
                        </div>
                        <div class="text-white pt-12">
                            <h3 class=" font-bold">{props.name}</h3>
                            <div class=" text-sm opacity-60">{props.singer}</div>
                            <div class="mt-8 text-gray-400">
                                <div class="flex items-center space-x-2 text-xs">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                                    <span>Easy listening from Ritik's Playlist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="relative">
                        <img
                            src={props.Imgsrc}
                            class="object-cover" />
                        <div class=" absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
                            <h3 class="animate-linearMotion font-bold">{props.singer}</h3>
                            <span className={`animate-linearMotion opacity-70`}>{props.name}</span>
                        </div>
                    </div>


                    <div >
                        <div class="relative h-1 bg-gray-200 cursor-pointer" ref={widthRef} onClick={(e) => { setDuration(e) }}>
                            <div className={toogleMusic ? `absolute h-full bg-green-500 flex items-center justify-end` : "absolute h-full  bg-red-500 flex items-center justify-end"} style={{ width: `${width}%` }} >
                                <div class="rounded-full w-3 h-3 bg-white shadow"></div>
                            </div>
                        </div>
                    </div>


                    <div class="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
                        <span className='fixed'>
                            {time}
                        </span>
                        {/* <div class="flex space-x-3 p-2"> */}
                        <div class="flex flex-wrap justify-around gap-5 grow">


                            {/* Start Over button */}
                            <button onClick={startOver}>
                                <img src="/src/assets/Images/icons8-left-arrow-100.png " className='w-10 h-10  rounded-full hover:shadow-md hover:shadow-black drop-shadow-xl ' />

                            </button>




                            {/* Play/Pause Button */}
                            <button onClick={PlauPauseButton}
                                class="overflow-hidden  w-20 h-20  text-white border-none    cursor-pointer relative z-9 group "
                            >



                                <img src={toogleMusic ? '/src/assets/Images/pauseold.png' : '/src/assets/Images/playold.png'} className={toogleMusic ? 'rounded-full hover:shadow-md  hover:shadow-green-900  drop-shadow-xl' : 'rounded-full  hover:shadow-md hover:shadow-red-600 w-21 drop-shadow-xl'} />
                                <audio ref={audioRef} className="none " controls="" >
                                    <source src={props.audio} />
                                </audio>


                            </button>


                            {/* mute button  */}
                            <button>
                                <img src={muteBtn ? "/src/assets/Images/mute.png " : "/src/assets/Images/volume.png"}
                                    onClick={clickHander}
                                    className='w-10 h-10 rounded-full hover:shadow-md hover:shadow-black drop-shadow-sm ' />
                            </button>








                        </div>

                        <div>
                            {mySongduration}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default PlayMusicInterface

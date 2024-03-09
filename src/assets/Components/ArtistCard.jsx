
import React from "react"
import { useNavigate } from "react-router-dom"
export default function ArtistCard(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(props.name)
    }

    return (
        <>
            <button onClick={handleClick}>

                <div
                    class='rounded-full my-10 relative overflow-hidden w-60 h-60  cursor-pointer text-2xl font-bold bg-arijit bg-top bg-cover' style={{ backgroundImage: `url(${props.image})` }}
                >
                    <div class="z-10 absolute w-full h-full peer"></div>
                    <div
                        class="opacity-50 absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                    ></div>
                    <div
                        class="opacity-50 absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                    >
                        {props.name}<br />
                    </div>

                </div>
            </button>

        </>
    )


}
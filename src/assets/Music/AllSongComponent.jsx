import React from 'react'
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';


function AllSongComponent(props) {

    const navigate = useNavigate();
    console.log(props.song)
    const clickHandler = () =>{
        console.log(props.song)
        navigate(props.song)
    }

    return (
        <div className='text-xl mt-5 items-center '>
            <h1>All Song Components {props.song}</h1>
            <ul  className='overflow-auto '>
                <li>
                    <button onClick={clickHandler} className='rounded-xl p-4 mt-10 text-2xl border-2 border-black' >{props.song}</button>
                </li>
                {/* <li>
                    <button className='rounded-xl p-4 mt-10 text-2xl'>1. Phir Mohabbat</button>
                </li>
                <li>
                    <button className='rounded-xl p-4 mt-10 text-2xl'>2. Phir Mohabbat</button>
                </li>
                <li>
                    <button className='rounded-xl p-4 mt-10 text-2xl'>3. Phir Mohabbat</button>
                </li>
                <li>
                    <button className='rounded-xl p-4 mt-10 text-2xl'>4. Phir Mohabbat</button>
                </li>
                <li>
                    <button className='rounded-xl p-4 mt-10 text-2xl'>5. Phir Mohabbat</button>
                </li> */}
            </ul>
        </div>
    )
}

export default AllSongComponent

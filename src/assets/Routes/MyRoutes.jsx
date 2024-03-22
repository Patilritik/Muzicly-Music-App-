import React from 'react'
import Home from '../Home/Home'
import Arijit from '../Singer.jsx/Arijit'
import Atif from '../Singer.jsx/Atif'
import Jubin from '../Singer.jsx/Jubin'
import Udit from '../Singer.jsx/Udit'
import Kesariya from '../AllSong/Kesariya'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apnabanale from '../AllSong/Apnabanale'
import PhirMohabbat from '../AllSong/PhirMohabbat'
import Tumhiho from '../AllSong/Tumhiho'
import OMahi from '../AllSong/OMahi'
import Dildiyangallan from '../AllSong/Dildiyangallan'
import Tujanena from '../AllSong/Tujanena'
import RaatanLambiya from '../AllSong/Raatan Lambiya'
import Diljaniya from '../AllSong/Diljaniya'
import AemereHumsafar from '../AllSong/AemereHumsafar'
import DilneyeKaha from '../AllSong/Dilneyekaha'
import RamtaJogi from '../AllSong/RamtaJogi'
import Sukhwinder from '../Singer.jsx/Sukhwinder'

function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Home />} />

                    {/* Singer section */}
                    <Route path='/Arijit-Singh' element={<Arijit />} />
                    <Route path="/Atif Aslam" element={<Atif />} />
                    <Route path="/Jubin Nautiyal" element={<Jubin />} />
                    <Route path="/Udit Narayan" element={<Udit />} />
                    <Route path="/Sukhwinder Singh" element={<Sukhwinder />} />
                    
                    {/* Song section */}
                    
                    {/* Arijit Singh */}
                    <Route path='/Arijit-Singh/Kesariya' element={<Kesariya/>}/>
                    <Route path='/Arijit-Singh/Apna bana le' element={<Apnabanale/>}/>
                    <Route path='/Arijit-Singh/Phir Mohabbat' element={<PhirMohabbat/>}/>
                    <Route path='/Arijit-Singh/Tum hi ho' element={<Tumhiho/>}/>
                    <Route path='/Arijit-Singh/O Mahi O mahi' element={<OMahi/>}/>



                    {/* Atif Aslam  */}
                    <Route path='/Atif Aslam/Dil Diyan Gallan' element={<Dildiyangallan/>}/>
                    <Route path='/Atif Aslam/Tu Jane Na' element={<Tujanena/>}/>


                    {/* Jubin Nautiyal */}
                    <Route path='/Jubin Nautiyal/Raatan Lambiya' element={<RaatanLambiya/>}/>
                    <Route  path='/Jubin Nautiyal/Dil Jaaniya' element={<Diljaniya/>}/>

                    {/* Udit Narayan */}
                    <Route path='/Udit Narayan/Ae mere Humsafar' element={<AemereHumsafar/>}/>
                    <Route path='/Udit Narayan/Dil ne ye kaha he' element={<DilneyeKaha/>}/>

                    {/* Sukhwinder Singh */}
                    <Route path='/Sukhwinder Singh/Ramta Jogi' element={<RamtaJogi/>}/>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default MyRoutes

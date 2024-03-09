import React from 'react'
import OneMusic from '../Components/OneMusic'
import Header from '../Components/Header'

function MusicList(props) {
  return (
    <div>
      { console.log(props.first)}
      <Header />

      {props.first && <OneMusic song={props.first}  />}
      {props.second && <OneMusic song={props.second} />}
      {props.third && <OneMusic song={props.third} />}
      {props.fourth && <OneMusic song={props.fourth} />}
      {props.fifth && <OneMusic song={props.fifth} />}
    </div>
  )
}

export default MusicList

import React,{useState} from 'react'
import './RightSide.css'
import {UilSetting} from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilChat } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
const RightSide = () => {
  const [modalOpened,setModalOpened]=useState(false);
  return (
    <div className='RightSide'>
        <div className='navIcons'>
            <UilEstate/>
            <UilSetting/>
            <UilBell/>
            <UilChat/>
            
        </div>
        <TrendCard/>
        <button className='button-rside' onClick={()=>setModalOpened(true)}>Share</button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}></ShareModal>
        
    </div>
  )
}

export default RightSide
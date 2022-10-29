import React,{useState,useRef} from 'react'
import './PostShare.css'
import Profile from '../../images/bb.png'
import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
const PostShare = () => {
  const[image,setImage]=useState('');
  const[text,setText]=useState('');  
  const[p,setP]=useState({img:"",desc:"",name:"kartheek1",liked:false,likes:200})
  const imageRef=useRef();
  const onImageChange=(event)=>{
    if(event.target.files&&event.target.files[0]){
      let img=event.target.files[0];
      setImage({
        image:URL.createObjectURL(img)
      },
      )
    }
  }
  const addPostHandler=(event)=>{
    event.preventDefault();
    
  }


  const textHandler=(e)=>{
    setText(e.target.value);
  }
  return (
    <div className='PostShare'>
        <img src={Profile} alt=""/>    
        <div>
        <input type="text" value={text}  name="desc" placeholder="What's in ur Mind" onChange={textHandler} /> 
        <div className='postOptions'>
            <div className='option' onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            Photo
            </div>
            <div className='option'>
            <UilPlayCircle/>
            Video
            </div>
            <button className='button-post' onClick={addPostHandler}>Share</button>
            <div style={{display:'none'}}>
              <input type='file' name='img' ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image&&
          <div className='previewImage'>
            <UilTimes onClick={()=>setImage(null)}  />
            <img src={image.image} alt=""/>
          </div>
        }
        </div>    
        
    </div>
  )
}

export default PostShare
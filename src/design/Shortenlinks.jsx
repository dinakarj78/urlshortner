import { react } from '@babel/types'
import React from 'react'
import styled from 'styled-components'
import bg from './Assets/bg-shorten-desktop.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
 

const Linkshortner=styled.div`
    height:85px;
    width:800px;
    background-image:url(${bg});
    background-repeat:no-repeat ;
    background-color:#3b3054;
    margin-top:90px;
    margin-left:200px;
    border-radius:5px;
    margin-bottom:0px;

    .inputs{
        width:500px;
        line-height:35px;
        margin: 30px 100px;
        margin-left:20px;
        border-radius:5px;
        border:none;
    }
    
    .submit-button{
        line-height:8px;
        background-color:#2acfcf;
        padding:15px;
        border:none;
        border-radius:10px;
        color:white;
        font-weight:700;
        &:hover{
            opacity:0.8;
            cursor:pointer;
        }
        &:focus{
            outline:none;
        }
    }
`
const Linklist=styled.div`
   margin-left:100px;
   width:800px;
   height:80px;
   display:flex;
   flex-flow:row;
   .OLink{
       align-self:flex-start;
       margin-right:50px;
   }
   .ShortenLink{
       margin-left:100px;
       width:80px;
       color:#2acfcf
   }
   .copy-button{
       background-color:#2acfcf;
       border-radius:15px;
       width:80px;
       height:30px;
       padding:0px;
       border:none;
       margin-left:80px;
       color:white;
       font-weight:700;
       &:hover{
           opacity:0.8;
           cursor:pointer;
       }
       .errormessage{
           margin-top:0px;
       }
   }
`

const Shorten=()=>
{
    const [Link,setLink]=useState([])
     const [Olink,setOlink]=useState([])
     const [text,changeText]=useState('copy!');
     const [responseload,setresposeload]=useState(false);

     const showlink=()=>
     {
     const originalUrl=document.getElementById("Link").value;
       if(originalUrl=='')
       alert('please enter a valid url')
     const url='https://api.shrtco.de/v2/shorten?url='+originalUrl;
     axios.get(url)
     .then(response=>{
             setLink(response.data.result.short_link,<Linklist/>)
             setOlink(response.data.result.original_link,<Linklist/>)
             setresposeload(!responseload);
     }).catch((error)=>{
     console.log(error);
     });
     return(
            null
       )
     }
     
    return(
        <Linkshortner>
        <div >
          <input type="text" className="inputs" id="Link" placeholder="shorten a link here....">
          </input>
          <button className="submit-button" onClick={()=>showlink()}
            >Shorten it!</button>
            <Linklist>
            <div className="OLink"> {Olink}</div>
             <div className="ShortenLink"> {Link}</div>

             {responseload?
             (
             <button className="copy-button" id="button" onClick={()=>{
             navigator.clipboard.writeText(Link);
              changeText("copied!");
              var property=document.getElementById("button");
              property.style.backgroundColor="#3b3054"
             }}>
                 {text}
             </button>):null}
           
             </Linklist>
             
        </div>
        </Linkshortner>  
          ) 
    }
 export {Shorten} 

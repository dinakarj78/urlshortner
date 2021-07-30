import { react } from '@babel/types'
import React from 'react'
import styled from 'styled-components'
import bg from './Assets/bg-shorten-desktop.svg'
 

const Linkshortner=styled.div`
    height:85px;
    width:800px;
    background-image:url(${bg});
    background-repeat:no-repeat ;
    background-color:#3b3054;
    margin-top:40px;
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
class Shorten extends React.Component
{
    render(){
    return(
        <Linkshortner>
        <div >
          <input type="text" className="inputs" placeholder="shorten a link here...."></input>
          <button className="submit-button" onClick="fetchLink()">Shorten it!</button>
        </div>
        </Linkshortner>  
          ) 
    }
 }
 export {Shorten} 
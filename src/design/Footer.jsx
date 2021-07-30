import React from 'react'
import styled from 'styled-components'
import pinterest from './Assets/icon-pinterest.svg'
import facebook from './Assets/icon-facebook.svg'
import instagram from './Assets/icon-instagram.svg'
import twitter from './Assets/icon-twitter.svg'


const Content=styled.div`
background-color:#232127;
position:absolute;
margin-top:0px;
width:100%;
   .Name{
       color:white;
       font-weight:500;
       font-size:50px;
       float:left;
   }
   .FooLinks{
      
       margin-top:30px;
       margin-left:380px;
       display:flex;
       flex-wrap:row nowrap;
   }
   .CName{
       margin-right:70px;
       font-weight:500;
       color:white;
       font-size:18px;
       .Icons{
         margin-top:90px;
        }

       li{
           color:#bfbfbf;
           list-style-type:none;
       }
       li:hover{
           cursor:pointer;
           color:#35323e;
       }
      
   }
`
  export class Footer extends React.Component{
     render(){
         return(
             <Content>
             <h1 className="Name">Shortly</h1>
             <div className="FooLinks">
              <diV className="CName">Features
                <ul>
                  <li>Link shortening</li>
                  <li>Branded Links</li>   
                  <li>Analytics</li>   
                </ul>
              </diV>             
              <diV className="CName">Resources
              <ul>
                 <li>Blogs</li>
                 <li>Developers</li>   
                 <li>Supported</li>   
              </ul>
              </diV>             
              <div className="CName">Company
              <ul>
                 <li>About</li>
                 <li>Our Team</li>   
                <li>Carrers</li>
                <li>Contact</li>     
              </ul>
              </div> 
              <div>            
                <img  src={facebook} className="Icons"/>
                <img  src={twitter} className="Icons"/>
                <img src={pinterest} className="Icons"/>
                <img  src={instagram} className="Icons"/>
              </div>
             </div>
             </Content>
         )
     }
 }
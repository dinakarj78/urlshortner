import React  from 'react'
import {
        BrowserRouter as Router,
        Switch,
        Link,
        Route
}from 'react-router-dom'
import { Shorten } from './Shortenlinks';
import { Services } from './Services';
import styled from 'styled-components';
import logo from  './Assets/logo.svg'
import illustrationworking from './Assets/illustrationworking.svg'
import { Footer } from './Footer';
 
  const  Nav=styled.nav`
  margin-top:15px;
  display:flex;
  flex-flow:row nowrap;
  color:white;
  margin-left:30px;
  align-content:center;
  
  .links{ 
       &:focus, &:visited, &:link, &:active {
       text-decoration: none;
       }
       &:hover{
         color:black;
       }
       margin:5px 30px;
       color:#bfbfbf;
       font-family:Poppins;
       font-weight:700;
      }

  .Navbuttons{
    align-self:flex-end;
    margin-right:auto;
    margin-left:550px;
    padding:8px;
     border:none;
     font-family:Poppins;
     font-weight:700;
     color:#bfbfbf;
     text-decoration:none;
  }
  
  }

  .Navbuttons:nth-child(2n){
    margin-left:0px;
    border-radius:15px;
    background-color:#2acfcf;
    margin-right:40px;
    color:white;
    &:hover
    {
      cursor:pointer;
      opacity:0.8;
    }
  }
  `;
  
class NavBar extends React.Component{
render(){
        return(
          <div>
              <Router>
                <Nav>
                    
                    <Link to='/'>
                    <img src={logo}/>         
                    </Link>      
                  
                    <Link to='/Features' className="links">Features</Link>      
                 
                    <Link to='/Pricing' className="links">Pricing</Link>      
                  
                    <Link to='/Resources' className="links">Resources</Link>      
                    <Link to='/Login' className="Navbuttons">Login</Link>      
                    <button to='/Signup' className="Navbuttons">Sign up</button>      
                     
                </Nav> 
              </Router>
              <Brandcontent/>
              <Shorten/>
              <Services/>
              <Footer/>
              </div>      
                 )
        }
}

const BannerContainer=styled.div`
 margin-top:0px;
`
const Bannerimg=styled.div`
float:right;
`
const Main=styled.div`
margin-left:200px;
margin-top:0px;
padding-top:180px;
font-family:Poppins;
font-weight:700;
font-size:50px;
margin-bottom:0px;`

const About=styled.div` 
    color:#bfbfbf;
    font-family:Poppins;
    font-size:18px;
    font-weight:700;
    margin-left:200px;
`

const Startbutton=styled.button`
    padding:10px;
    color:white;
    background-color:#2acfcf;
    border:none;
    border-radius:15px;
    margin:20px 200px;
    font-weight:700;
    &:hover{
      cursor:pointer;
      opacity:0.8;
    }
`
const Brandcontent=()=>{
      return (
        <div>
          <BannerContainer>
         <Bannerimg>
             <img src={illustrationworking} />
         </Bannerimg>
         <Main>
           More than just shorter links <br></br>
         </Main>

         <About>
         Build your brands recognition and get detailed insights on how your links are performing.
         </About>

         <Startbutton>
           Get started
         </Startbutton>

         </BannerContainer>
         </div>
      )
}
export {NavBar} 
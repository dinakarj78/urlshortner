import React from "react"
import styled from "styled-components"
import customizable from './Assets/icon-fully-customizable.svg'
import detailedrecords from './Assets/icon-detailed-records.svg'
import recognition from './Assets/icon-brand-recognition.svg'
import bgboost from './Assets/bg-boost-desktop.svg'
const Main=styled.div`
text-align:center;
background-color:#bfbfbf;
margin-left:100px;
width:1200px;
height:auto;
.header{
    margin-top:50px;
    font-weight:700;
}
.info{
    margin-left:380px;
    width:400px;
    color:#9e9aa8;
    weight:700;
    word-spacing:8px;
    font-family:Poppins;
    font-size:18px;
}
`
const Serviceslist=styled.div
`
margin:0px;
display:flex;
flex-direction:row;
height:400px;
width:1000px;

.icons{
    background-color:#232127;
    border-radius:50px;
    margin-top:-20px;
}

.description{
color:#9e9aa8;
background-color:white;
margin-left:100px;
margin-top:50px;
width:250px;
height:auto;
align-self:flex-start;
flex-grow:0;
}

.description:nth-child(2n){
    margin-top:120px;
}

.Listservices{
    color:black;
}

.Servicedescr{
   font-weight:500;   
}

`
class Services extends React.Component{
    render(){
        return(
             <div>
            <Main>
            <h1 className="header">Advanced Statistics</h1>
            <p className="info">Track how your links are performing  across the web aith our advanced  statistics dashboard.</p>
            <Serviceslist>
              <div className="description">
                <img src={recognition} className="icons"></img>
                    <h4 className="Listservices">
                      Brand Recognition
                    </h4>
                    <p className="Servicedescr">
                        BOOST your brand recognition with each click.Generic links doesnt mean a thing.Branded links install confidence in your content.
                    </p>
              </div>
              <div className="description">
                  <img src={detailedrecords} className="icons"></img>
                    <h4 className="Listservices">
                        Detailed Records
                    </h4>
                    <p className="Servicedescr">
                        Great insight into who is looking in to your links.Knowing when and where people engage with your content helps inform better decisions.
                    </p>
              </div>
              <div className="description">
                  <img src={customizable} className="icons"></img>
                  <h4 className="Listservices">
                      Fully Customizable
                  </h4>
                  <p className="Servicedescr">
                      Improve brand awarness and content discoverability through customizable links.Super charging audience  engagement.
                    </p>
              </div>
            </Serviceslist>
            </Main>
            <Boost/>
            </div>
        )
    }
}

const LinkBoost=styled.div
`margin-top:0px;
background-image:url(${bgboost});
background-repeat:none;
background-color: #3b3054;
height:200px;
color:white;
text-align:center;

.header{
    margin-top:0px;
 }

 .Boostservice{
     margin-top:50px;
     border:none;
     background-color:#2acfcf;
     color:white;
     padding:15px;
     border-radius:15px;
     font-weight:700;
     font-family:Poppins;
     font-size:18px;
     &:hover{
         opacity:0.8;
         cursor:pointer;
     }
 }

`
export const Boost=()=>{
    return(
    <LinkBoost>
    <h1 className="header">BOOST YOUR LINKS TODAY</h1>
   <button className="Boostservice">Get started</button>
    </LinkBoost>
    )
}

export {Services}
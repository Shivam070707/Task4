import React from 'react'
import { Card} from '@mui/material'
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 10, display: "flex" }}>
        <div style={{ width: "50%", paddingLeft: 20}}>{props.children}</div>
        <div style={{ width: "10%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
// Card functions
const shivam = {
  variant:'outlined',
  marginTop:'150px',
  marginLeft:'50px',
  height:'100px',
  width: '100px'
}

function Card1(){
  return(
    
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Twitter'
    per = '80'
    perText = '80%'
    bg='#e2fbd7'
    pc='#34b53a'
    /></div>
   )
    }
     function Card2() { 
      return(
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Instagram'
    per = '80'
    perText = '80%'
    bg='#dad7fe'
    pc='#4339f2'
    /></div>
    )
} 
    function Card3(){
      return(
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Facebook'
    per = '80'
    perText = '80%'
    bg='#ffe5d3'
    pc='#ff3a29'
    /></div> 
      )
  }
    function Card4(){
      return(
    <div style={{display:'inline',float:'left'}}>
    <OmCard 
    title = 'Behance'
    per = '80'
    perText = '80%'
    bg='#ccf8fe'
    pc='#02a0fc'
    /></div>
  ) 
  }

//Creating Cards
function OmCard(props){
 
  return(
  <Card sx={shivam}>
        <center><span>{props.title}</span>
        </center>
    <div className='cstyle'>
    
      <Example >
        <CircularProgressbar value={props.per} text={props.perText}
        background
        styles={buildStyles({
          backgroundColor: `${props.bg}`,
          textColor: "black",
          pathColor: `${props.pc}`,
          trailColor: "transparent"
        })}/>
      </Example>
    </div>
  </Card>
              
  )
}
export {Card1,Card2,Card3,Card4}

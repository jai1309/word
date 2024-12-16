import React, { useState } from "react";
import './body.css'
let num=0,temp,words;
const body = (props) => {
const[text,setText]= useState("");   
const[dark,setDark]=useState("Enable Dark Mode");
const handleClick=()=>{
    console.log("Button Clicked");
    temp=text;
    setText(temp.toUpperCase());
    props.showalert("Converted To Upper Case","success");

}
const handleOnChange= (event)=>{
    console.log("chnage Made")
    setText(event.target.value)
    let size=event.target.value;
    num=size.length;
    words=size.split(" ").length;
    }
const handleclear=()=>{
  setText("");
  num=0;
  words=0;
  props.showalert("Canvas Cleared","warning");
}
const handlecopy=()=>{
let copy= document.getElementById("exampleFormControlTextarea1");
copy.select();
navigator.clipboard.writeText(copy.value);
props.showalert("Text copied","success");
}
  return (
    <div>
      <div className="mb-3 container my-3" >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.text==='Dark'?'black':'white',color:props.text==='Dark'?'white':'black'}} placeholder="Enter text here" onChange={handleOnChange}></textarea>
        <button className="btn btn-success my-3" onClick={handleClick}> Click To Change</button>
        <button className="btn btn-success my-3 mx-3" onClick={handleclear}>Clear The Canvas</button>
        <button className="btn btn-success my-3" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-success my-3 mx-3" onClick={props.func}>Enable {props.text==='Dark'?'Light':'Dark'} Mode</button>
        <h2>Preview your text here</h2>
        <div className="conatiner">{text}</div>
        <p>Number of characters are: {num}</p>
        <p>Number of words are: {words}</p>
      </div>
    </div>
  );
};

export default body;

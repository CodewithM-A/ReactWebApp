import {React, useState } from "react";
export default function TextForm(props) {
 
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handlelowClick = () => {
    // console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleclearClick = () => {
    // console.log("clear text was clicked");
    setText("")
  }
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const handleExtraSpaces = (event) => {
    console.log("on change");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCopy = (event) => {
    console.log("on change");
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // setText(event.target.value);
  }
  const [text, setText] = useState("Enter Text here.");
  return (
    <>

      <div className='container' style={{color: props.mode==='light'?'black':'white'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#1E1A19', color: props.mode==='light'?'black':'white'}}  value={text} id="textbox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlelowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleclearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
      <div className="container">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").filter((element)=>{return  element.length!==0}).length} words and {text.length} characters</p>
      </div>
      <h3>Preview</h3>
      {text.length>0?text:"write something in the above box to Preview here."}
     
      </div>
    </>
  )
}

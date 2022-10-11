import React,{useState} from 'react';

function TextFom(props){
  const handleChangeText=(event)=>{
    console.log("you have clicked");
    setText(event.target.value)
  }
  const handleLoClick=()=>{
    console.log("presses");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnClick=()=>{
    console.log("presses");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleCopyClick=()=>{
      var text=document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/); //regex
    setText(newText.join(" "))
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
  }
  const [text,setText]=useState("");
  return (
    <>
    <div>
       <h1>{props.heading}</h1>
       <div className="mb-3">
          <textarea className="form-control" id="mybox" value={text} rows="8" onChange={handleChangeText}></textarea>
       </div>
       <button className='btn btn-primary mx-1' onClick={handleOnClick}>Convert to UpperCase</button>
       <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
       <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Data</button>
       <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
       <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Handle Extra Spaces</button>
    </div>
    <div className='container my-3'>
     <h2>Your Text Summary</h2>
     <p>{text.split(' ').length} <b>words and</b> {text.length} characters</p>
     <p>{0.008 * text.split(' ').length} minutes read</p>
     <p>{text.split('.').length} sentences read</p>
     <h2>Preview</h2>
     <p>{text}</p>
     
    </div>
    </>
   
  );
}

export default TextFom;

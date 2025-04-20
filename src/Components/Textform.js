import React, { useState } from 'react';

export default function Textform(props) {
  const [text, settext] = useState("Enter text here");
  const [vowelCount,setVowelCount]=useState(0);
  const [consonentCount,setConsonentCount]=useState(0);

  // Correct way to change the state
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    settext(newText);
  };
  const handelloclick=() => {
    console.log("Lowercase was clicked: " + text);
    let newText=text.toLowerCase();
    settext(newText);
  }


  const handleonChange = (event) => {
    console.log("on change");
    settext(event.target.value);
  };
  const handlevowelclick=() => {
    console.log("vowel count was clicked: " + text);
    let count=0;
    for( let i=0;i<text.length;i++){
      if(text[i]==="a"||text[i]==="e"||text[i]==="i"||text[i]==="o"||text[i]==="u" ||text[i]==="A"||text[i]==="E"||text[i]==="I"||text[i]==="O"||text[i]==="U"){
        count++;
      }
    }
    setVowelCount(count);
  };
  const handleconsonentclick=() => {
    let count=0;
    for(let i=0;i<text.length;i++){
      if((text[i]>="a" && text[i]<="z" )|| (text[i]>="A" && text[i]<="Z")){
        count++;
      }
    }
    setConsonentCount(count);
  };
  const handelclear=() => {
    console.log("clear button was pressed"+ text);
    settext("");
  };


  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.Heading}</h1>
        <textarea className="form-control" value={text}   id="Textbox"  onChange={handleonChange}rows="8">
        </textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Change to upper case</button>
        <button className="btn btn-primary mx-1 my-2 " onClick={handelloclick} >Change to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handlevowelclick}>Number of vowels</button>
        <button className="btn btn-primary mx-1" onClick={handleconsonentclick}>Number of consonets</button>
        <button className="btn btn-primary mx-1 " onClick={handelclear}>Clear</button>
      </div>
    </div>
    <div  className='container my-3'>
      <h2>SUMMARY</h2>
      <p>
        Words {text.split(/\s+/).filter((word) => word.length > 0).length} | Characters {text.length} | No of vowels {vowelCount} | No of consonants {consonentCount}
      </p>
    </div>
    <div className='container my-3'>
      <h2>PREVIEW</h2>
      <p>{text.length > 0 ? text :"enter some text to get a preview"}</p>
    </div>
    </>
  );
}

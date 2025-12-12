import { logDOM } from '@testing-library/dom'
import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUppClick = () => {
    // console.log("Uppercase has clicked: " + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase" , "success")
    
  }
  const handleLowerClick = () => {
    // console.log("Uppercase has clicked: " + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase" , "success")
  }
  const handleClrClick = () => {
    // console.log("Uppercase has clicked: " + text)
    let newText = ""
    setText(newText)
    props.showAlert("Clear Text" , "success")
  }
  const handleCapsClick = () => {
    // console.log("Uppercase has clicked: " + text)
    let newText = text.split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ")
    setText(newText)
    props.showAlert("Every word converted in camelcase" , "success")
  }
  const handlerRevClick = () => {
    // console.log("Reverse has clicked: " + text)
    let newText = text.split(" ")
    .reverse()
    .join("")
    setText(newText)
    props.showAlert("Every word reversed" , "success")
  }

  const handleOnChnge = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  // text = "New Text Here";   // Wrong way to change the State
  // setText("New Text Here");  // Correct way to change the State
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
          <label htmlFor="myBox" className="form-label">Example textarea</label>
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#6d6767' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder='Enter Your Text Here' value={text} onChange={handleOnChnge} id="myBox" rows="6"></textarea>
        </div>
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUppClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleCapsClick}>Convert to Capitalize Case</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLowerClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handlerRevClick}>Reverse Words</button>
          <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleClrClick}>Reset</button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}
          </b> Words, <b>{text.length} </b>Characters</p>
        <p> <b>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)}
          </b> Minutes to read that</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text here"}</p>
      </div>
    </>
  )
}

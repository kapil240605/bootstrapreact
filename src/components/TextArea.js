
import React, {useState} from 'react'

export default function TextArea(props) {
    const handlechange = (event)=>{
       settext(event.target.value); 
    }

    const handleup = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert('Converted to UpperCase', 'success')
    }

    const handlelo = ()=>{
      let newtext = text.toLowerCase();
      settext(newtext);
      props.showalert('Converted to LowerCase', 'success')
  }

  const handleclear = ()=>{
    let newtext = "";
    settext(newtext);
    props.showalert('Text cleared', 'success')
  }

    const  [text, settext] = useState("");
  return (
    <>
    <div className='container my-3'>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handlechange} placeholder='Enter text here' id="mybox" rows="8"></textarea>
</div>
<button className='btnfirst mx-2' onClick={handleup}>Convert to UpperCase</button>
<button className='btnfirst mx-2' onClick={handlelo}>Convert to LowerCase</button>
<button className='btnfirst mx-2' onClick={handleclear}>Clear text</button>
</div>

<div className='container my-3'>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length - 1} words & {text.length} characters</p>
  <p>text can be read in {0.008 * text.split(" ").length} minutes</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
    </>
  )
}

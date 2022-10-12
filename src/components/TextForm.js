import React, {useState} from 'react'


export default function TextForm(props) {
  const[text, setText] = useState(" ")
  
    const handleuppercaseclick = () => { 
    const uppercasetext = text.toUpperCase()
          setText(uppercasetext)
          props.alert("Converted to UPPERCASE", "success")
}
    const handlelowercaseclick = () => { 
      const lowercasetext = text.toLowerCase()
          setText(lowercasetext)
          props.alert("Converted to lowercase", "success")
        console.log("lowercase button clicked " + lowercasetext)
        }
    const handleclearclick = () => { 
      const cleartext = ''
          setText(cleartext)
          props.alert("text cleared ", "success")
}
    const handlereverseclick = () => { 
     const reversetext = text.split("").reverse().join("")
          setText(reversetext)
          props.alert("Text Reversed", "success")
         }
    const handlextraspacesclick = () => { 
     const extraspaces = text.split(/[ ]+/)
          setText(extraspaces.join(" "))
          props.alert("Extra spaces removed", "success")
       }

    function copytoclipboard() {
      // Get the text field
      var copyText = document.getElementById("mytextbox");
    
      // Select the text field
      copyText.select();
      //copyText.setSelectionRange(0, 99999); For mobile devices
    
       // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges()
      // Alert the copied text
      //alert("Copied the text: " + copyText.value);
      props.alert("Copied to clipboard", "success")
    }

    const handletextonchange = (event) => {
     setText(event.target.value)
        console.log("text onchange  clicked")
    }

   return (
    <>
    <div className="container"  style={{ color :   props.mode === 'light' ? '' : 'white'}}>
    <div>
        <center>  <h2>{props.heading}</h2></center>
        <div className="mb-3">
<textarea className="form-control"  value={text} id="mytextbox" style={{ backgroundColor :   props.mode === 'light' ? '' : 'white'}} onChange={(event) =>handletextonchange(event)}  rows="10"></textarea></div>
  
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={  handleuppercaseclick }>Convert to UPPERCASE</button>
  {/* <button className="btn btn-primary mx-2" onClick={ (event) => handlelowercaseclick() }>Convert to LOWERCASE</button> //the way to use event when using form tag and use event.preventdefault inside the calling function */} 
  <button disabled={text.length===0}  className="btn btn-primary mx-1 my-2" onClick={  handlelowercaseclick }>Convert to LOWERCASE</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={  handlereverseclick}>Reverse Text</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={ copytoclipboard }>Copy to clipboad </button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={ handlextraspacesclick }>Remove extra spaces</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={ handleclearclick }>Clear Text</button>

    </div>
    </div>
   
    <div className="container my-3 " style={{ color :   props.mode === 'light' ? '' : 'white'}}>
      <h1>Your Text Summary</h1>
      <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/ /g,"").length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
    
  )
}

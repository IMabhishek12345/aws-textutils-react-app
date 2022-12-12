import React,{useState} from 'react'
//{useState} this is a hook in react 
//hooks allows you to use the function without making 
// it's class

export default function TextForm(props) {
    const handleupClick=()=>{
       console.log("Uppercase was clicked"+ text);
       let newtext=text.toUpperCase();
       setText(newtext);
       props.showAlert("text has been converted to uppercase","success")
    }
    const handlelowClick=()=>{
        console.log("lowercase was clicked"+ text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("text has been converted to lowercase","success")
     }
    const handleonChange=(e)=>{
        //console.log("on change is clicked");
        setText(e.target.value);
    }
    const [text, setText]=useState("");// here text is assigned a default value "Enter text here"
    // text value can only be updatdd by using setText func
    // text="let change the text";// wrong way to change the state
    //setText("new Text");  //correct way to change the state 
    return (
        <div className="container" style={{color: props.mode==="dark"?"white":"black"}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}} onChange={handleonChange} value={text} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handlelowClick}>Convert to LowerCase</button>
        </div>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length* 0.04}min required </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter the text to preview it here"}</p>
         
        </div>
        
   )
    
}

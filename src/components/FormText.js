import React, { useState } from 'react'


export default function FormText() {
    const [text, setText] = useState("Enter text");


    const onChangeHandler = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    const toUppercaseHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const toLowercaseHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearTextHandler = () => {
        let newText = "";
        setText(newText);
    }

    const inverseTextHandler = () => {
        let arr = text.split("");
        let reverseString = arr.reverse().join("");
        
        setText(reverseString);
    }

    return (
        <div>
            <div className="form-floating">
                <h1 className="text-center p-2">Enter Text to analyze</h1>
                <textarea onChange={onChangeHandler} className="form-control" value={text} id="exampleFormControlTextarea1" rows="12" cols="10"></textarea>
            </div>
            <button onClick={toUppercaseHandler} type="button" className="btn btn-info mx-1 mt-5">Convert To Uppercase</button>
            <button onClick={toLowercaseHandler} type="button" className="btn btn-info mx-1 mt-5">Convert To Lowercase</button>
            <button onClick={clearTextHandler} type="button" className="btn btn-info mx-1 mt-5">Clear Text</button>
            <button onClick={inverseTextHandler} type="button" className="btn btn-info mx-1 mt-5">Inverse Text</button>
            <div className="my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
            </div>
        </div>
    )
}

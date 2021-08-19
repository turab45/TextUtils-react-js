import React, { useState } from 'react'


export default function FormText() {
    const [text, setText] = useState("Enter text");


    const onChangeHandler = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    const onClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    return (
        <div>
            <div className="form-floating">
                <h1 className="text-center p-5">Enter Text to analyze</h1>
                <textarea onChange={onChangeHandler} className="form-control" value={text} id="exampleFormControlTextarea1" rows="12" cols="10"></textarea>
            </div>
            <button onClick={onClickHandler} type="button" className="btn btn-info mt-5">Convert To Uppercase</button>
        </div>
    )
}

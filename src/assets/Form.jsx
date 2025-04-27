import { useState } from "react";
import Button from "./Button";

function Form(props) {
    const [text, setText] = useState("");

    function handleUpper(e) {
        e.preventDefault()
        setText(text.toUpperCase());
    }
    function handleLower(e) {
        e.preventDefault()
        setText(text.toLowerCase());
    }


    return (
        <form className="ta">
            <textarea
                placeholder="Write What's on your mind"
                name="textarea"
                id="ta"
                cols="100"
                rows="10"
                onChange={(e) => {
                    setText(e.target.value);
                }}
                value={text}
            >
            </textarea>
            <div id="btnc">
                <div id="btn">
                    <Button onClick={handleUpper}>toUpper</Button>
                    <Button onClick={handleLower}>toLower</Button>
                </div>
            </div>
        </form>
    );
}

export default Form;

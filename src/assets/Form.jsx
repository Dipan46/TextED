import { useState } from "react";
import Button from "./Button";

function Form() {
    const [text, setText] = useState("");

    function handleUpper() {
        setText(text.toUpperCase());
    }

    function handleLower() {
        setText(text.toLowerCase());
    }

    function handleNormal() {
        let capitalizedText = text
            .split(". ")
            .map((sentence) => {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            })
            .join(". ");

        setText(capitalizedText);
    }

    function handleCapitalise() {
        let capitalizedText = text
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(capitalizedText);
    }

    return (
        <form className="ta" onSubmit={(e) => e.preventDefault()}>
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
            ></textarea>
            <div id="btnc">
                <div id="btn">
                    <Button onClick={handleUpper}>toUpper</Button>
                    <Button onClick={handleLower}>toLower</Button>
                    <Button onClick={handleNormal}>toNormal</Button>
                    <Button onClick={handleCapitalise}>Capitalise</Button>
                </div>
            </div>
        </form>
    );
}

export default Form;

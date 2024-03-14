import React from 'react'

function Body(props) {
    const [text, setText] = React.useState("Enter text here");

    function upper() {
        console.log("Clicked");
    }
    return (
        <>
            <div className='ta'>
                <textarea name="textarea" id="ta" cols="100" rows="10">{props.txt}</textarea>
            </div>
            <div id="btnc">
                <div id='btn'>
                    <button className="btn btn-primary" type="submit" onClick={upper}>toUpper</button>
                </div>
                <div id='btn'>
                    <button className="btn btn-primary" type="submit" onClick={upper}>toLower</button>
                </div>
            </div>
        </>
    )
}

export default Body;
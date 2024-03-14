import React from 'react';
function Button(props) {
    return (
        <button className="btn btn-primary" type="submit" onClick={props.click}>{props.text}</button>
    )
}
export default Button;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../Friend.css";

function Friend(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            
        </div>
    )
}

export default Friend;
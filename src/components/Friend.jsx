/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../Friend.css";

function Friend(props) {
    return (
        <div id="friend-card">
            <h1 className="card-info">Name: {props.name}</h1>
            <h1 className="card-info">Age: {props.age}</h1>
                <ul>
                    {props.pets.map((pet) => {
                        return (
                        <div id="list-items"><li>Pet Name: {pet.name}</li><li>Pet Breed: {pet.breed}</li></div>
                    )})}
                </ul>
        </div>
    )
}

export default Friend;
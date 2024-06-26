/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "../FriendsList.css";
import friends from "../../friends-data";
import Friend from './Friend';

function FriendsList() {
    return (
        <div>
            <ul>
            {friends.map((friend) => 
                <li>
                    <Friend 
                    name={friend.name}
                    age={friend.age}
                    pets={friend.pets}
                    />
                </li>
            )}
            </ul>
            
        </div>
    )
}

export default FriendsList;
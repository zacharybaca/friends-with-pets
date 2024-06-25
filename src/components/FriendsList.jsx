/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "../FriendsList.css";
import friends from "../../friends-data";
import Friend from './Friend';

function FriendsList() {
    return (
        <div>
            {friends.map((friend) => 
                <Friend 
                    name={friend.name}
                    age={friend.age}
                    pets={friend.pets}
                />
            )}
        </div>
    )
}

export default FriendsList;
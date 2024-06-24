/* eslint-disable no-unused-vars */
import "../FriendsList.css";
import friends from "../../friends-data";

function FriendsList() {
    return (
        <div>I Am FriendsList
            {friends.map((friend) => console.log(friend))}
        </div>
    )
}

export default FriendsList;
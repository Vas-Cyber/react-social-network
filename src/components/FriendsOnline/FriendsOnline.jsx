import friends from "./FriendsOnline.css"
import FriendsItem from "./FriendsItem/FreindsItem";

const FriendsOnline = (props) =>{

    let friendsElements = props.state.friendsOnline.map( sidebar => <FriendsItem name={sidebar.name}  id={sidebar.id}/> );

    return (
        <div className={friends.friends}>
            <div>
                {friendsElements}
            </div>
        </div>
    );
}

export default FriendsOnline;
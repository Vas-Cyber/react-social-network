import friends from "../FriendsOnline.css"
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

    return (
        <div className={friends.friends}>
            <NavLink to={'/friends/' + props.id}>{props.name}</NavLink>
        </div>
    );

}

export default FriendsItem;

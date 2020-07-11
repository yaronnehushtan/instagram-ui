import React, {useContext} from 'react';
import './MenuAvatar.scss'
import {UserContext} from "../user-context";
import avatarDeafult from './avatar.png';


function MenuAvatar(props) {

    const {user}= useContext(UserContext)

    return (
        <div className="MenuAvatar" >
            {/*//in case we didnt sign in so there is no user*/}
            <img
                className="rounded-circle"
                src={user && user.avatar ? user.avatar : avatarDeafult}
                alt={user && user.username} />
        </div>
    );
}

export default MenuAvatar;

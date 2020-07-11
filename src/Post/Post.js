import React, {useEffect, useState} from 'react';
import './Post.scss'
import config from "../config";
import avatarDeafult from './avatar.png';
import PostLike from "../PostLike/PostLike";



function Post(props) {

    const [isLikedByUser,setIsLikedByUser] = useState(false);

    useEffect( ()=>{
        const likesArr = props.postData.likes;
        const currentUser= props.user._id;

        // console.log(currentUser)
        // console.log('use effect')

        const found = likesArr.find(userId => userId === currentUser)
        // console.log(found);
        // console.log(!found);

        if (!found) {
            setIsLikedByUser(false)
            // console.log(isLikedByUser)
        } else {
            setIsLikedByUser(true)
            // console.log(isLikedByUser)
        }
        // console.log(isLikedByUser)

        // likesArr.



    },[])

    function getEditedDate (date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const newDate = new Date(date);
        return monthNames[newDate.getMonth()] + " " + newDate.getDate();
    }

    return (
        <div className="Post col-12 col-md-5 col-lg-3 m-3">
            <div className="card pb-3">
                <div className="p-2">
                    <img
                        className="rounded-circle avatar post-avatar-img"
                        src={avatarDeafult} />
                    <small className="float-right text-muted">{getEditedDate(props.postData.createdAt)}</small>
                </div>
                <div className="image-container">
                    <img src={config.apiUrl+ '/posts/' + props.postData.image} className="card-img-top post-image" alt="..."/>
                </div>

                    <div className="card-body">
                        <PostLike likes={props.postData.likes} postId={props.postData._id} likedByUser={isLikedByUser}/>
                        <p className="card-text mt-4">{props.postData.description}</p>
                    </div>
            </div>
        </div>
    );
}

export default Post;

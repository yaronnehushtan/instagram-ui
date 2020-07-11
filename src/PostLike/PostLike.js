import React, {useContext, useEffect, useState} from 'react';
import './PostLike.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import config from '../config/index';
import {useHistory} from "react-router-dom";
import {UserService} from "../services/user-service";
import {UserContext} from "../user-context";

function PostLike(props) {

    const {user} = useContext(UserContext);
    // const temp= props.likedByUser
    const [isLikedByUser,setIsLikedByUser] = useState();


    //  tommorow !!! ned to call the futher and change the state of the futher !!!

    // const temp = () => {
    //     setIsLikedByUser(props.likedByUser);
    // }
    // temp();

    // const history = useHistory();

    // useEffect( ()=>{
    //     setIsLikedByUser(props.likedByUser)
    //     // if (props.likedByUser) {
    //     //     setIsLikedByUser(true);
    //     //     console.log('enteer true');
    //     // } else {
    //     //     setIsLikedByUser(false);
    //     //     console.log('enteer false');
    //     // }
    // })


    const like = async (e) => {
        console.log('like function start');
        const thisUser= {
            _id: user._id
        }


        const res = await fetch('http://localhost:4000/posts/'+ props.postId +'/likes', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            credentials:"include",
            body: JSON.stringify(thisUser)
        });

        if (res.status === 201 ){
            setIsLikedByUser(true);

        } else if (res.status === 401) { //send error massage

        } else {
            console.log('unknown error');

        }
        return res

    }

    const unlike = async (e) => {
        console.log('unlike function start');
        const userId=user._id;

        console.log(props.postId);
        console.log(userId);
        const res = await fetch('http://localhost:4000/posts/'+ props.postId +'/likes/' + user._id, {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json'
            },
            credentials:"include",
        });

        if (res.status === 200 ){
            console.log('delete!')
            setIsLikedByUser(false);

        } else if (res.status === 400) { //send error massage
            console.log('like was not found')
        } else if (res.status === 401) { //send error massage
            console.log('post was not found')
        } else {
            console.log('unknown error');

        }
        return res

    }




    return (
        // faa-pulse animated
        <div className="PostLike d-flex align-items-center float-right" onClick={props.likedByUser ? unlike : like }>

            <small className="mr-3">{props.likes.length}</small>
            <FontAwesomeIcon icon={faHeart} className={props.likedByUser ? "liked" : "unlike" }/>

        </div>
    );
}

export default PostLike;


{/*<div className="heart-container">*/}
{/*<div className="heartbox"><input type="checkbox" className="checkbox" id={'checkbox-'+props.postId}/>*/}
{/*    <label htmlFor={'checkbox-'+props.postId}>*/}
{/*        <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">*/}
{/*            <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">*/}
{/*                <path*/}
{/*                    d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"*/}
{/*                    id="heart" fill={ isliked ? "red" : "green" }/>*/}
{/*                <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>*/}
{/*                <g id="heartgroup7" opacity="0" transform="translate(7 6)">*/}
{/*                    <circle id="heart1" fill="#9CD8C3" cx="2" cy="6" r="2"/>*/}
{/*                    <circle id="heart2" fill="#8CE8C3" cx="5" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*                <g id="heartgroup6" opacity="0" transform="translate(0 28)">*/}
{/*                    <circle id="heart1" fill="#CC8EF5" cx="2" cy="7" r="2"/>*/}
{/*                    <circle id="heart2" fill="#91D2FA" cx="3" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*                <g id="heartgroup3" opacity="0" transform="translate(52 28)">*/}
{/*                    <circle id="heart2" fill="#9CD8C3" cx="2" cy="7" r="2"/>*/}
{/*                    <circle id="heart1" fill="#8CE8C3" cx="4" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*                <g id="heartgroup2" opacity="0" transform="translate(44 6)">*/}
{/*                    <circle id="heart2" fill="#CC8EF5" cx="5" cy="6" r="2"/>*/}
{/*                    <circle id="heart1" fill="#CC8EF5" cx="2" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*                <g id="heartgroup5" opacity="0" transform="translate(14 50)">*/}
{/*                    <circle id="heart1" fill="#91D2FA" cx="6" cy="5" r="2"/>*/}
{/*                    <circle id="heart2" fill="#91D2FA" cx="2" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*                <g id="heartgroup4" opacity="0" transform="translate(35 50)">*/}
{/*                    <circle id="heart1" fill="#F48EA7" cx="6" cy="5" r="2"/>*/}
{/*                    <circle id="heart2" fill="#F48EA7" cx="2" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*                <g id="heartgroup1" opacity="0" transform="translate(24)">*/}
{/*                    <circle id="heart1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>*/}
{/*                    <circle id="heart2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>*/}
{/*                </g>*/}
{/*            </g>*/}
{/*        </svg>*/}
{/*    </label>*/}
{/*</div>*/}


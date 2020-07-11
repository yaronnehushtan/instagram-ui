import React, {useContext, useEffect, useState} from 'react';
import './Feed.scss'
// import {UserService} from "../services/user-service";
import Post from "../Post/Post";
import config from '../config/index';
import {UserService} from "../services/user-service";
import Spinner from "../Spinner/Spinner";
import {UserContext} from "../user-context";

function Feed(props) {

    const {user} = useContext(UserContext);
    const [postsList, setPostsList] = useState([]);
    const [isLoading, setLoading] = useState(true);


    // static async get(){
    //     try {
    //         const res = await fetch(config.apiUrl + '/users/me', {
    //             credentials: 'include'
    //         });
    //         if (res.status === 403) {
    //             return null;
    //         }
    //         const user = await res.json();
    //         return user;
    //     } catch (e){
    //         return null;
    //     }
    //
    // }

    // useEffect( ()=>{  //once the app is Up we want to check if we have cookie. if we do have insert user data into context
    //     async function getUser() {
    //         const posts = await UserService.get()
    //         setUser(user);
    //         setLoading(false);
    //         if (!user) {
    //             history.push('/login')
    //         }
    //     }
    //     getUser();
    // }, [])

    useEffect( ()=>{  //once the app is Up we want to check if we have cookie. if we do have insert user data into context
        async function getPosts() {
                try {
                    const res = await fetch(config.apiUrl + '/posts', {
                        credentials: 'include'
                    });
                    if (res.status === 400) {
                        return null;
                    }
                    const posts = await res.json();
                    setPostsList(posts);
                    setLoading(false);
                } catch (e){
                    return null;
                }
            }
        getPosts();
    },[])


    return (
        <div className="Feed">
            {isLoading && <Spinner />}
            <div className="row d-flex justify-content-center">
                {postsList.map( (post, index) => {
                    return <Post key={index} postData={post} user={user}/>
                })}

            </div>

        </div>
    );
}

export default Feed;

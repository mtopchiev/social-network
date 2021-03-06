import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/state";




const Profile = (props) => {



    return (

        <div className={s.content}>
            <div className={s.profileInfo}>
                <ProfileInfo state={props.state.myProfileData}/>
            </div>


            <div className={s.myposts}>

                <MyPosts dataPosts={props.state.dataPosts}
                         addPost={props.store.addPost.bind(store)}
                         updateNewPostText={props.store.updateNewPostText.bind(store)}

                         newPostText={props.state.newPostText}

                />

            </div>

        </div>


    )

}

export default Profile;

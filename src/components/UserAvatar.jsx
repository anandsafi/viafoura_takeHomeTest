/*
  UserAvatar component - renders user avatar as an image from assets that are stored locally in the project. 
  Future extension would be to retrieve user avatars from a cloud location like AWS S3 bucket for example.
*/

import React from 'react';
import avatar from '../assets/user_avatar.jpg';

export default class UserAvatar extends React.Component {
    render() {

        return(
            <div className="avatar">
                <img src={avatar} alt="userAvatar" />
            </div>
        );
    } 
};


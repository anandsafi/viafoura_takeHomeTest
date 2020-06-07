/*
  UserType component - renders user profile information. 
  Currently, user level info includes user name, type of the user, time since comment posted.
*/

import React from 'react';

export default class userType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.userName,
            type: this.props.userType,
            time: this.props.commentTime,
        };
    }

    render() {
        const {name, type, time} = this.state;

        return(
            <div className="userType">
                <b>{name}</b> <span className="title">{type}</span> &middot; <span className="time">{time}</span>
            </div>
        );
    } 
};


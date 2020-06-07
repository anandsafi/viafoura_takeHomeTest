/*
  CommentBox Component - parent component to render all the child components.
  Child-component specific data is passed downstream via this component.
*/

import React from 'react';
import CommentText from './CommentText.jsx';
import UserAvatar from './UserAvatar.jsx';
import UserType from './UserType.jsx';
import ReplyBar from './ReplyBar.jsx';
import './styles/CommentBox.css';
import './styles/CommentText.css';
import './styles/UserAvatar.css';
import './styles/UserType.css';
import './styles/ReplyBar.css';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData: this.props.commentData || ''
        };
    }

    render() {
        const {commentData} = this.state;

        return(
            <div className="commentBlock">
                <div className="commentContainer">
                    <div className="commentBox">
                        <UserAvatar/>
                        <div className="comment">
                            <UserType userType={commentData.type} userName={commentData.name} commentTime={commentData.commentTime}/>
                            <CommentText commentText={commentData.commentText}/>
                            <ReplyBar replies={ commentData.replies} upvotes={commentData.upvotes} downvotes={commentData.downvotes}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
};


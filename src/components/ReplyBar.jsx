/*
  ReplyBar component - renders interactive reply functionality. 
  Users can upvote, downvotes or look at the number of replies to a specific comment.
*/

import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default class ReplyBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            replies: this.props.replies,
            upvotes: this.props.upvotes,
            downvotes: this.props.downvotes,
        };
        this.upvoteCounter = this.upvoteCounter.bind(this);
        this.downvoteCounter = this.downvoteCounter.bind(this);
    }

    upvoteCounter() {
      this.setState({
          upvotes: this.state.upvotes + 1,
      })
    }

    downvoteCounter() {
        this.setState({
            downvotes: this.state.downvotes + 1,
        })
    }

    render() {
        const {replies, upvotes, downvotes} = this.state;

        return(
            <div className="replyBarContainer">
                <button className="replyBtn">REPLY</button>
                <span className="repliesText">{replies}</span> REPLIES
                <span className="vote"><button onClick={this.upvoteCounter}><FontAwesomeIcon icon={faChevronUp} /></button>{upvotes}</span>
                <span className="vote"><button onClick={this.downvoteCounter}><FontAwesomeIcon icon={faChevronDown} /></button>{downvotes}</span>
            </div>
        );
    } 
};


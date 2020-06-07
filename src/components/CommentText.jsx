/*
  CommentText component - renders the actual comment posted by the user based on the data passed from the parent.
*/

import React from 'react';

export default class CommentText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.commentText,
        };
    }

    render() {
        const {text} = this.state;

        return(
            <div className="commentText">
                {text}
            </div>
        );
    } 
};


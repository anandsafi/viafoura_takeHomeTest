/* eslint-disable react-hooks/exhaustive-deps */

/*
  Main component that acts as the wrapper/ container for the Comment Component.
  Config data is fetched from a separate JS file and passed down to the CommentBox.
*/

import React from 'react';
import './styles/App.css';
import CommentBox from './CommentBox.jsx';
import CommentConfigData from '../configurations/comment_data.js';

function App() {

return (
    <div className="App">
      <CommentBox commentData={CommentConfigData()}/>
    </div>
  );
}

export default App;

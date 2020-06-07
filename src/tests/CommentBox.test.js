/*
  Spec file to demonstrate sample test scenario for Comment Component
*/

import React from "react";
import { render } from "@testing-library/react";
import CommentBox from "../components/CommentBox.jsx";

const mockCommentConfigData = {
    name: "Brad",
    type: "Author",
    commentTime: "2 minutes ago",
    commentText: "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
    replies: 21,
    upvotes: 123,
    downvotes: 0,
  }

// happy path - expected component behavior  
test("renders comment component", () => {
  const { getByText, getByAltText } = render(<CommentBox commentData={mockCommentConfigData} />);
  
  // set up matchers
  const userAvatarEl = getByAltText(/userAvatar/i);
  const userName = getByText(/Brad/i);
  const userType = getByText(/Author/i);
  const commentTimeEl = getByText(/minutes/i);
  const commentTextEl = getByText(/So what the german/i);

  // assertions
  expect(userAvatarEl).toBeInTheDocument();
  expect(userName).toBeInTheDocument();
  expect(userType).toBeInTheDocument();

  expect(commentTimeEl).toBeInTheDocument();
  expect(commentTimeEl.textContent).toBe(mockCommentConfigData.commentTime);

  expect(commentTextEl).toBeInTheDocument();
  expect(commentTextEl.textContent).toBe(mockCommentConfigData.commentText);
});

// handling for component not having any config data
test("does not render comment component if not config data is passed", () => {
    const template = render(<CommentBox/>);
    const componentsInsideTemplate = template.container.child;

    expect(componentsInsideTemplate).toBe(undefined);
});
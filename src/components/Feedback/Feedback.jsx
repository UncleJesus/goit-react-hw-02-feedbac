import React from "react";

const FeedbackOptions = ({ feedback }) => (
  <>
    <button type="button" onClick={feedback}>
      Good
    </button>
    <button type="button" onClick={feedback}>
      Neutral
    </button>
    <button type="button" onClick={feedback}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;

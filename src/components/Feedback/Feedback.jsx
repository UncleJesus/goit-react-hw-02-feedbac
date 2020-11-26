import React from "react";

const FeedbackOptions = ({ feedback }) => (
  <>
    <button type="button" name="good" onClick={feedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={feedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={feedback}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;

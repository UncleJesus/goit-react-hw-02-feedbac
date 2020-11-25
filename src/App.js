import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/Feedback";
import Section from "./components/Section";
import Notification from "./components/Notifi";

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbacks = (element) => {
    let key = element.target.textContent.toLowerCase();
    this.setState((state) => ({ [key]: state[key] + 1 }));
  };

  countTotal = (total) =>
    Object.values(total).reduce((acc, element) => acc + element);

  countPositiveFeedbackPercentage = (good, total) =>
    Math.round((good * 100) / total);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions feedback={this.countFeedbacks} />
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification props="No feedback given" />
        )}
      </>
    );
  }
}

export default App;

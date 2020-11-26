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

  countFeedbacks = ({ target }) => {
    this.setState((state) => ({ [target.name]: state[target.name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positivePercentage = (good / this.countTotalFeedback()) * 100;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions feedback={this.countFeedbacks} />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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

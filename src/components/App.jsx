import React from "react";
import { Section } from "./FeedbackSection/FeedbackSection";
import { SectionBox } from "./FeedbackSection/FeedbackSectionStyled";
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/FeedbackStats/FeedbackStats';
import { OptionsBtn } from 'components/FeedbackBtns/FeedbackBtns';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickOnBtn = e => {
    const option = e.target.id
    this.setState(prevState => ({[option]: prevState[option] + 1}))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return <SectionBox>
      <Section title={'Please leave feedback'}>
        <OptionsBtn options={Object.keys(this.state)} handleClick={this.handleClickOnBtn}></OptionsBtn>
      </Section>
      
      <Section>
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
        </Section>
        
   </SectionBox>
  }
};

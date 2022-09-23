import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, Title } from './FeedbackSectionStyled';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/FeedbackStats/FeedbackStats';
import { OptionsBtn } from 'components/FeedbackBtns/FeedbackBtns';
export class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickOnBtn = e => {
    if (e.target.id === 'good') {
      this.setState({
        good: this.state.good + 1,
      });
    } else if (e.target.id === 'neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
      });
    } else if (e.target.id === 'bad') {
      this.setState({
        bad: this.state.bad + 1,
      });
    }
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
    return (
      <SectionBox>
        <Title>{this.props.title}</Title>
        <OptionsBtn handleClick={this.handleClickOnBtn}></OptionsBtn>
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
      </SectionBox>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

import React from 'react';
import {
  SectionBox,
  Title,
  Stats,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './FeedbackSectionStyled';
import { Button, ButtonsBox } from 'components/FeedbackBtns/FeedbackBtnsStyled';
// import { OptionalBtns } from 'components/FeedbackBtns/FeedbackBtns';
export class Section extends React.Component {
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
        <Title>Please leave feedback</Title>
        <ButtonsBox>
          <Button type="button" id="good" onClick={this.handleClickOnBtn}>
            good
          </Button>
          <Button type="button" id="neutral" onClick={this.handleClickOnBtn}>
            neutral
          </Button>
          <Button type="button" id="bad" onClick={this.handleClickOnBtn}>
            bad
          </Button>
        </ButtonsBox>
        <Stats>
          <StatisticsTitle>Statistics</StatisticsTitle>
          <StatisticsList>
            <StatisticsItem>
              <StatisticsText>Good: {this.state.good}</StatisticsText>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsText>Neutral: {this.state.neutral}</StatisticsText>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsText>Bad: {this.state.bad}</StatisticsText>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsText>
                Total: {this.countTotalFeedback()}
              </StatisticsText>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsText>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%{' '}
              </StatisticsText>
            </StatisticsItem>
          </StatisticsList>
        </Stats>
      </SectionBox>
    );
  }
}

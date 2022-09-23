import React from 'react';
import { Button, ButtonsBox } from './FeedbackBtnsStyled';
export class OptionalBtns extends React.Component {
  handleClickOnGood = () => {};
  handleClickOnNeutral = () => {};
  handleClickOnBad = () => {};
  render() {
    return (
      <ButtonsBox>
        <Button type="button" onClick={this.handleClickOnGood}>
          good
        </Button>
        <Button type="button" onClick={this.handleClickOnNeutral}>
          neutral
        </Button>
        <Button type="button" onClick={this.handleClickOnBad}>
          bad
        </Button>
      </ButtonsBox>
    );
  }
}

import React from 'react';
import { Button, ButtonsBox } from './FeedbackBtnsStyled';
export const OptionsBtn = ({ handleClick }) => {
  return (
    <ButtonsBox>
      <Button type="button" id="good" onClick={handleClick}>
        Good
      </Button>
      <Button type="button" id="neutral" onClick={handleClick}>
        Neutral
      </Button>
      <Button type="button" id="bad" onClick={handleClick}>
        Bad
      </Button>
    </ButtonsBox>
  );
};

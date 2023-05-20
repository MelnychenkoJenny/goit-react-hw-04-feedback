import React, { useState } from 'react';
import { Container, MainTitle } from './App.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onUpdateStatus = option => {
    if (option === 'good') setGood(prevState => prevState + 1);
    if (option === 'neutral') setNeutral(prevState => prevState + 1);
    if (option === 'bad') setBad(prevState => prevState + 1);
  };
  const countTotalFeadback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeadback();
    return good ? Math.round((good / total) * 100) : 0;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <MainTitle>Cafe Expresso</MainTitle>
      <Section title="Please leave feedback" shadow="true">
        <FeedbackOptions options={options} onUpdateStatus={onUpdateStatus} />
        <Section title="Statistics">
          {countTotalFeadback() ? (
            <Statistics
            options={options}
            value={{good, neutral, bad}}
              total={countTotalFeadback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Section>
    </Container>
  );
};

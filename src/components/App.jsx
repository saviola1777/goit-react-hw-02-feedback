import React from 'react';
import Statistics from 'components/Statisticks/Statistics';
import Section from 'components/Section/Section';
class App extends React.Component{

state={
  good: 4,
  neutral: 0,
  bad: 4,
}
countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
}
countPositiveFeedbackPercentage() {
  return Math.round((this.state.good * 100) / this.countTotalFeedback());
}
render(){
  return (
    <div>
    <Section title="Please leave feedback"><p>Button</p></Section>
    <Section title="Statistick">
    <Statistics
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback()}
    positivePercentage={this.countPositiveFeedbackPercentage()}
   />
   </Section>
   </div>
    )}
  }
  export default App
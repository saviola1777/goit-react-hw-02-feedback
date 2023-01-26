import React from 'react';
import Statistics from 'components/Statisticks/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Cointeiner from 'components/Cointeiner/Cointeiner';

class App extends React.Component{

state={
  good: 0,
  neutral: 0,
  bad: 0,
}
countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
}
countPositiveFeedbackPercentage() {
  return Math.round((this.state.good * 100) / this.countTotalFeedback());
}

onLeaveFeedback = e => {
this.setState({ [e]: this.state[e] + 1 });
console.log(e,Object.keys(this.state))
  
};

render(){
  
const{good , neutral ,bad ,}=this.state
  return (
    <Cointeiner>

    <Section title="Please leave feedback">
    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>

    <Section title="Statistick">
      
      {this.countTotalFeedback()?(
    <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={this.countTotalFeedback()}
    positivePercentage={this.countPositiveFeedbackPercentage()}
   />) :(
   <Notification message="There is no feedback"/> ) }
   </Section>
   </Cointeiner>
    )}
  }
  export default App

  // options={Object.keys(this.state)} ми передали назви нашого стейту це те саме що ['good', 'neutral', 'bad'] маасив  потім ми перебрали в li і розрендерили
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
options = ['Good', 'Neutral', 'Bad'];
onLeaveFeedback = e => {
  switch (e) {
    case 'Good':
      this.setState({ good: this.state.good + 1 });
      break;
    case 'Neutral':
      this.setState({ neutral: this.state.neutral + 1 });
      break;
    case 'Bad':
      this.setState({ bad: this.state.bad + 1 });
      break;
    default:
      return;
  }
};

render(){
  return (
    <Cointeiner>
    <Section title="Please leave feedback">
    <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
    <Section title="Statistick">
      {this.countTotalFeedback()?(
    <Statistics
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback()}
    positivePercentage={this.countPositiveFeedbackPercentage()}
   />) :(
   <Notification message="There is no feedback"/> ) }
   </Section>
   </Cointeiner>
    )}
  }
  export default App

  //class App extends React.Component  ==== щоб додати клас бо в класі можна добавити динаміку , тому клас повинен розширяти react тому добавляєм в кінці extends React.Component
// в цьому класі є рендер цього класу render ()
// this - це силка на наш клас App дуже важливо коли ми створюєм клас в реакт компонент то this дає доступ до всьог тобто this.state===доступ до обекта state , this.option поверне масив обєктів і так далі тобто в цьому класі щоб взяти якісь дані все потрібно робити через this
//Об'єкт-стану state – це властивість класу, яка не повинна безпосередньо змінюватися розробником. Це обовязково обєкт 
// щоб обновити state можна тільки методом this.setState але змінить не динамічно тобто нприклад якшо в state{good:2}  а ми зробили метод що при кліку на якусь кнопку воно повино збільшуватися на 1  onLeaveFeedback=()=>{ this.setState({good:+1})} то воно перезипише  state{good:3}  але при наступному клікові нічого не зміниться томущо цей метод не запоминає теперішній стан state , щоб змінити динамічно то ми повині повернути фунцкію
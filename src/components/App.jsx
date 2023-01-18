import React from 'react';
import Statistics from 'components/Statisticks/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
class App extends React.Component{

state={
  good: 0,
  neutral: 0,
  bad: 0,
}
options = ['Good', 'Neutral', 'Bad'];
countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
}
countPositiveFeedbackPercentage() {
  return Math.round((this.state.good * 100) / this.countTotalFeedback());
}
onLeaveFeedback=()=>{
this.setState((stateValue)=>{
  return{
good:stateValue.good+1
  }})}

render(){
  return (
    <div>
    <Section title="Please leave feedback">
    <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>
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

  //class App extends React.Component  ==== щоб додати клас бо в класі можна добавити динаміку , тому клас повинен розширяти react тому добавляєм в кінці extends React.Component
// в цьому класі є рендер цього класу render ()
// this - це силка на наш клас App дуже важливо коли ми створюєм клас в реакт компонент то this дає доступ до всьог тобто this.state===доступ до обекта state , this.option поверне масив обєктів і так далі тобто в цьому класі щоб взяти якісь дані все потрібно робити через this
//Об'єкт-стану state – це властивість класу, яка не повинна безпосередньо змінюватися розробником. Це обовязково обєкт 
// щоб обновити state можна тільки методом this.setState але змінить не динамічно тобто нприклад якшо в state{good:2}  а ми зробили метод що при кліку на якусь кнопку воно повино збільшуватися на 1  onLeaveFeedback=event=>{ this.setState({good:+1})} то воно перезипише  state{good:3}  але при наступному клікові нічого не зміниться томущо цей метод не запоминає теперішній стан state , щоб змінити динамічно то ми повині повернути фунцкію
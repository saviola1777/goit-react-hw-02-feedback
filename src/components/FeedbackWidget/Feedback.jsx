import React from "react";
import css from 'components/FeedbackWidget/Feedback.module.css'
class Feedback extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };

  clickOnGood = () => (
    this.setState(stateValue => {
      return {
        good:stateValue.good +1,
      }
    })
  )

   clickOnNeutral = () => (
    this.setState(stateValue => {
      return {
        neutral:stateValue.neutral +1,
      }
    }))

   clickOnBad = () => (
    this.setState(stateValue => { 
      return {
        bad:stateValue.bad +1,
      }
    })
  )
  render() {
    return (
      <div className={css.feedback}>
        <div className={css.feedbackWrapper}>
         <h2 className={css.titel}>Please Leave Feedback</h2>
          <ul className={css.feedbackList}>
            <li className={css.feedbackItem}><button className={css.feedbackButton} type="button" onClick={this.clickOnGood}>Good</button></li>
            <li className={css.feedbackItem}><button className={css.feedbackButton} type="button" onClick={this.clickOnNeutral}>Neutral</button></li>
            <li className={css.feedbackItem}><button className={css.feedbackButton} type="button" onClick={this.clickOnBad}>Bad</button></li>
          </ul>
        </div>

        <div className={css.statisticsWrapper}>
         <h2 className={css.titel}>Statistics</h2>
          <ul className={css.statisticsList}>
            <li className={css.statisticsItem}>
              <p className={css.feedbackText}>Good:</p><span className={css.feedbackSpan}>/ {this.state.good} \</span></li>
            <li className={css.statisticsItem}>
              <p className={css.feedbackText}>Neutral:</p><span className={css.feedbackSpan}>/ {this.state.neutral} \</span></li>
            <li className={css.statisticsItem}>
              <p className={css.feedbackText}>Bad:</p><span className={css.feedbackSpan}>/ {this.state.bad} \</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback

// Робимо імпорт import React from "react";
//state - state – це властивість класу, яка не повинна безпосередньо змінюватися розробником.
//Далі ми функцію перетворюємо в класс
//React.Component -виконує багато  функціонало під капотом
// В класові є метод рендер де він повертає розмітку render()
// Атрибути тута комоненти type="button" -це проп і тут якшо ми хочемо  шоб обробило подію OnClick onChange, onSubmit
// <li className={css.feedbackItem}><button type="button" onClick={this.clickOnButton}>Good</button></li> тут  onClick
  
  //  state = {  -----state зберігає стан тобто теперішній  значення value:0
//     neutrale: 0,
//   };

//<span>{this.state.value}</span> тут в цей спат ми замисали теперішнє значення яке зберігається в state і дорівнює 5 тобто в середині спана буде 5

// clickOnButton = () => (    ==== а ця функція зміню теперішній стан тобто при кліку на цю подію куди ми її повісили тобто на button
//     this.setState({        ===== вона міняє значення в state через метод setState тобто значення value було 0 а при на тискані на
//       neutral:1              ===== button стало 1 і в середину спана записало 1 томущо в середину спана було педедано значення state.value яке =1
//     })                     ===== <span>{this.state.neutral}</span> це  тесаме що <span>0</span> при натискані стало <span>1</span>
// )

//  clickOnNeutral = () => (                ====== Це те саме що було зверху тільки в цій функції записується теперішній стан тобто  при кліку 
//     this.setState(stateValue => {        ====== в state перезаписується значення neutral і тепер воно 1   (neutral:1) а вже в функцію
//       return {                           ====== stateValue --ми можемо називати як хочеш так вона зберігай теперішній стан state={natural:1}
//         neutral:stateValue.neutral +1,   ======  а при наступну кліці state={natural:2} томущо в цій функції ми повертаємо neutral:stateValue.neutral +1
//       }                                  ======  тобто stateValue зберігає стан а neutral:stateValue.neutral +1 додає 1
//     }))
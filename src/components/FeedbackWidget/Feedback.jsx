import React from "react";
import css from 'components/FeedbackWidget/Feedback.module.css' 

class Feedback extends React.Component {
  render() {
    return (
      <div className={css.feedback}>
        <div className={css.feedbackWrapper}>
         <h2 className={css.titel}>Please Leave Feedback</h2>
          <ul className={css.feedbackList}>
            <li className={css.feedbackItem}><button type="button" onClick={()=>(console.log('подія на клік'))}>Good</button></li>
            <li className={css.feedbackItem}><button>Neutral</button></li>
            <li className={css.feedbackItem}><button>Bad</button></li>
          </ul>
        </div>

        <div className={css.StatisticsWrapper}>
         <h2 className={css.titel}>Statistics</h2>
          <ul className={css.StatisticsList}>
            <li className={css.StatisticsItem}><p>Good</p></li>
            <li className={css.StatisticsItem}><p>Neutral</p></li>
            <li className={css.StatisticsItem}><p>Bad</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback

// Робимо імпорт import React from "react";
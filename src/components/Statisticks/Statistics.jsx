import propTypes from "prop-types";
import css from "components/Statisticks/Statisticks.module.css"
const Statistics =({ good, neutral, bad, total, positivePercentage})=>{

  return (
    <ul className={css.statisticksList}>
    <li className={css.statisticksItem}>Good:{good}</li>
    <li className={css.statisticksItem}>Neutral:{neutral}</li>
    <li className={css.statisticksItem}>Bad:{bad}</li>
    <li className={css.statisticksItem}>Total:{total}</li>
    <li className={css.statisticksItem}>PositivePercentage:{positivePercentage}%</li> 
    </ul>
  )};

Statistics.propTypes={
  good:propTypes.number.isRequired,
  neutral:propTypes.number.isRequired,
  bad:propTypes.number.isRequired,
  total:propTypes.number.isRequired,
  positivePercentag:propTypes.number.isRequired,
} 
export default Statistics;
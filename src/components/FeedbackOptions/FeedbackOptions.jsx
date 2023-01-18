import css from 'components/FeedbackOptions/FeedbackOptions.module.css'
import propTypes from "prop-types";
const FeedbackOptions=({options, onLeaveFeedback})=>{
  return( 
    <div className={css.buttonTable}>{options.map(option=>{
      return(
      <button
      className={css.button}
       key={option}
       type="button"
       onClick={()=>onLeaveFeedback(option)}
      >{option}</button>
  )}) 
    
   } </div>

  )
}
FeedbackOptions.prototype={
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
}


export default FeedbackOptions
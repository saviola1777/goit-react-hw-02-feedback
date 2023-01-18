
import propTypes from "prop-types";
const FeedbackOptions=({options, onLeaveFeedback})=>{
  return( 
    <div>{options.map(option=>{
      return(
      <button
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
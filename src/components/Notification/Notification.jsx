import propTypes from "prop-types";
import css from 'components/Notification/Notification.module.css'
const Notification =({message})=>{
  return(
    <h3 className={css.message}>{message}</h3>
  )}
Notification.propTypes={
  message:propTypes.string.isRequired
}
export default Notification
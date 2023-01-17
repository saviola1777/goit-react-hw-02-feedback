import propTypes from "prop-types";
import css from "components/Section/Section.module.css"
const Section =({title , children})=>{ 
  return (
<section> 
  <h2 className={css.titels}>{title}</h2>
     {children}
</section>
  )}

  Section.prototype={
    title:propTypes.string.isRequired,
    children:propTypes.node.isRequired
  }

  export default Section
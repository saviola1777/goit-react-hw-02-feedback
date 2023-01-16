import css from 'components/App.module.css' 
import Feedback from 'components/FeedbackWidget/Feedback'
export const App = () => {
  return (
    <div className={css.app}>
      <Feedback/>
     </div>
  );
};

import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, percent }) {
  if (total > 0) {
    return (
      <>
        <p className={css.feedback}>Good:{good}</p>
        <p className={css.feedback}>Neutral:{neutral}</p>
        <p className={css.feedback}>Bad:{bad}</p>
        <p className={css.feedback}>Total:{total}</p>
        <p className={css.feedback}>Positive:{percent}%</p>
      </>
    );
  }
}

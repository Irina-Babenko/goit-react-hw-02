import css from './Options.module.css';

export default function Options({ updateFeedback, reset, total }) {
  const shouldShowReset = total >= 1;
  return (
    <>
      <button className={css.btn} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {shouldShowReset && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </>
  );
}

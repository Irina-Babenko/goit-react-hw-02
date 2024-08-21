import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

import css from './App.module.css';

// const getInitialData = () => {
//   const savedData = window.localStorage.getItem('my-data');
//   // console.log(savedData)
//   return savedData !== null ? JSON.parse(savedData) : 0;
// };

// export default function App() {
//   const [data, setData] = useState(getInitialData);

//   useEffect(() => {
//     window.localStorage.setItem('my-data', JSON.stringify(data));
//   }, [data]);

//   const resetFeedback = () => {
//     setData({ good: 0, neutral: 0, bad: 0 });
//   };
//   const updateFeedback = feedbackType => {
//     setData({ ...data, [feedbackType]: data[feedbackType] + 1 });
//   };
//   const totalFeedback = data.good + data.neutral + data.bad;
//   const percentOfGood = Math.round((data.good / totalFeedback) * 100);

//   return (
//     <div className={css.container}>
//       <Description />
//       <Options
//         updateFeedback={updateFeedback}
//         reset={resetFeedback}
//         total={totalFeedback}
//       />
//       <Feedback
//         good={data.good}
//         neutral={data.neutral}
//         bad={data.bad}
//         total={totalFeedback}
//         percent={percentOfGood}
//       />
//       <Notification total={totalFeedback} />
//     </div>
//   );
// }

const getInitialData = () => {
  const savedData = window.localStorage.getItem('my-data');
  return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [data, setData] = useState(getInitialData);

  useEffect(() => {
    window.localStorage.setItem('my-data', JSON.stringify(data));
  }, [data]);

  const resetFeedback = () => {
    setData({ good: 0, neutral: 0, bad: 0 });
  };

  const updateFeedback = feedbackType => {
    setData(prevData => ({
      ...prevData,
      [feedbackType]: prevData[feedbackType] + 1,
    }));
  };

  const totalFeedback = data.good + data.neutral + data.bad;
  const percentOfGood =
    totalFeedback > 0 ? Math.round((data.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={data.good}
          neutral={data.neutral}
          bad={data.bad}
          total={totalFeedback}
          percent={percentOfGood}
        />
      ) : (
        <Notification total={totalFeedback} />
      )}
    </div>
  );
}

// import React, { Component } from 'react';
//
// import Statistics from './Statistic/Statistic';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Notification from './Notification';
//
//
// export  class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
//
//   onLeaveFeedback = (name) => {
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       }
//     })
//   };
//
//   countTotalFeedback = () => {
//     const { good, neutral, bad} = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     if(good === 0) {
//       return 0;
//     }
//
//     return Math.ceil(Number((good * 100) / this.countTotalFeedback()));
//   };
//
//   render() {
//     const { good, neutral, bad } = this.state;
//
//     const total = this.countTotalFeedback();
//     const totalPositive = this.countPositiveFeedbackPercentage();
//
//     const renderNotification = this.countTotalFeedback();
//
//     const buttonsNames = (Object.keys(this.state));
//
//     return (
//       <div>
//         <Section title='Please leave feedback'>
//           <FeedbackOptions
//             options={buttonsNames}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//
//         <Section title='Statistics'>
//
//           {renderNotification
//             ? <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             totalPositive={totalPositive}
//             />
//             : <Notification message="There is no feedback"/>
//           }
//
//          </Section>
//       </div>
//     )
//   }
// }


import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistic/Statistic';
import Notification from './Notification';



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };


  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(Number((good * 100) / countTotalFeedback()));
    }


  const getButtonsNames=['good', 'bad', 'neutral'];
  return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={getButtonsNames}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {countTotalFeedback()
            ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            totalPositive={countPositiveFeedbackPercentage()}
            />
            : <Notification message="There is no feedback"/>
          }
        </Section>

    </div>
  );
};


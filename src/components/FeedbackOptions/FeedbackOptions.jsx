import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
  return(
    <div>
      {options.map(buttonName => {
        return(
          <button
            className={styles.button}
            key={buttonName} type='button'
            onClick={()=> onLeaveFeedback(buttonName)}>{buttonName}</button>
        )
      })
      }
    </div>
  )
}

export default FeedbackOptions;

FeedbackOptions.protypes = {
  options:PropTypes.array.isRequired,
  onLeaveFeedback:PropTypes.func.isRequired,
}

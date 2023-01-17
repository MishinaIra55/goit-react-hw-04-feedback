import React from 'react';
import PropTypes from 'prop-types';

import  './Statistic.module.css';


const Statistics = ({ good, neutral, bad, total, totalPositive }) => (
  <div>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {totalPositive}%</span>
  </div>

);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalPositive: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};




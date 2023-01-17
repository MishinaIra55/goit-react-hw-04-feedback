import React from 'react';
import styles from './Section.module.css';

import PropTypes from 'prop-types';

const Section = ({ children, title }) => (

  <div>
    <title className={styles.title}>{title}</title>
    {children}
  </div>

);
 export default Section;

 Section.protypes = {
   children:PropTypes.any.isRequired,
   title:PropTypes.string.isRequired,
 }

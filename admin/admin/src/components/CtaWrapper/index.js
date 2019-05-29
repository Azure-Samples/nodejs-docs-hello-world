/**
 * CTAWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function CTAWrapper({children}) {
  return <div className={styles.ctaWrapper}>{children}</div>;
}

CTAWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CTAWrapper;

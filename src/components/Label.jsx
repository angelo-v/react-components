import React from 'react';
import Value from './Value';

/** Displays the label of a Solid LDflex subject. */
export default ({ src, children }) =>
  <Value src={`${src}.label`}>{children}</Value>;
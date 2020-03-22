import React from 'react';

interface IProps {
  children: any
}

export const H2: React.SFC<IProps> = ({ children }) => (
  <div>
    <h2>{children}</h2>
  </div>
)

export const H3: React.SFC<IProps> = ({ children }) => (
  <div>
    <h3>{children}</h3>
  </div>
)
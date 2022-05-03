import React from 'react';

export const Stack = ({children, pos}) => (
  <div className='stack' style={{
    justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
  }}>
     {children}
  </div>
);

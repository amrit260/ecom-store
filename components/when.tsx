import React from 'react';

interface WhenProps {
  condition: boolean;
  childern: React.ReactNode;
}

const When: React.FC<WhenProps> = ({ childern, condition }) => {
  if (condition) {
    return childern;
  }
  return null;
};

export default When;

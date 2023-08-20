'use client';

import React from 'react';

interface NoResultsProps {
  // Add props here
}

const NoResults: React.FC<NoResultsProps> = (props) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      No results found
    </div>
  );
};

export default NoResults;

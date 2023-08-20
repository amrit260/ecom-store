'use client';

import React from 'react';

interface FooterProps {
  // Add props here
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 Test store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

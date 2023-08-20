'use client';

import PreviewModal from '@/components/preview-modal';
import React, { useEffect, useState } from 'react';

interface ModalProviderProps {
  // Add props here
}

const ModalProvider: React.FC<ModalProviderProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;

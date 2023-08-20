'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

interface ToastProviderProps {
  // Add props here
}

const ToastProvider: React.FC<ToastProviderProps> = (props) => {
  return <Toaster />;
};

export default ToastProvider;

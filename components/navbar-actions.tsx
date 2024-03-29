'use client';

import React, { useEffect, useState } from 'react';
import Button from './ui/button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-card';
import { useRouter } from 'next/navigation';

interface NavbarActionsProps {
  // Add props here
}

const NavbarActions: React.FC<NavbarActionsProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {' '}
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;

'use client';

import { usePathname } from 'next/navigation';
import Landing from '@/components/landing/landing';

const ConditionalLanding: React.FunctionComponent = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '';

  return isHomePage ? <Landing /> : null;
};

export default ConditionalLanding;

'use client';

import { usePathname } from 'next/navigation';
import SectionLanding from '@/components/storyblok/sectionlanding/sectionlanding';

const ConditionalLanding: React.FunctionComponent = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '';

  return isHomePage ? <SectionLanding /> : null;
};

export default ConditionalLanding;

// Example usage of global data in any component
'use client';

import { useGlobalData } from '@/providers/global-data-provider';

const ExampleComponent = () => {
  const { globalData, isLoading } = useGlobalData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{globalData.companyname}</h1>
      <p>{globalData.slogan}</p>
    </div>
  );
};

export default ExampleComponent;

import { createContext, useState } from 'react';

import BrandItem from '@/components/brands';
import Brand from '@/model/Brand';
import { useAppSelector } from '@/store/hooks';

export const HeaderContext = createContext('');

export default function Homepage() {
  const brandtList: Brand[] = useAppSelector((state) => state.brand.brandList);

  const [headerText, setFilter] = useState('Brand Details');
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="container mx-auto">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <HeaderContext.Provider value={headerText}>
            {brandtList.map((brand) => (
              <BrandItem key={brand.id} {...brand} />
            ))}
          </HeaderContext.Provider>
        </div>
      </div>
    </div>
  );
}

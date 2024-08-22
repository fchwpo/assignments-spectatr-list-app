import { useState, useCallback, useEffect } from 'react';
import { debounce } from '@/utils/debounce';

export const useSearch = <T,>(
  items: T[], 
  getFilteredItems: (items: T[], searchTerm: string) => T[],
  debounceDuration: number = 300
) => {
  const [filteredItems, setFilteredItems] = useState<T[]>(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleSearch = useCallback(
    debounce((searchTerm: string) => {
      if (!searchTerm) {
        setFilteredItems(items);
        return;
      }

      const filtered = getFilteredItems(items, searchTerm);
      setFilteredItems(filtered);
    }, debounceDuration),
    [items, getFilteredItems, debounceDuration]
  );

  return { filteredItems, handleSearch };
};

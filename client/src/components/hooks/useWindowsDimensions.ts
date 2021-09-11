import { useEffect, useState } from 'react';

export interface WindowDimension {
  height: number;
  width: number;
}

export const useWindowDimension = (): WindowDimension => {
  const [dimenension, setDimension] = useState<WindowDimension>({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimenension;
};

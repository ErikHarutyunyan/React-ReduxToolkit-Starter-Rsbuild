import { useEffect, useRef, useState } from 'react';

const useHideShow = () => {
  const [showLinks, setShowLinks] = useState(false);
  const headerRef = useRef(null);
  const childrenRef = useRef(null);

  useEffect(() => {
    const childrenHeight = childrenRef.current.getBoundingClientRect().height;
    if (showLinks) {
      headerRef.current.style.height = `${childrenHeight}px`;
    } else {
      headerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return [headerRef, childrenRef, setShowLinks];
};

export default useHideShow;

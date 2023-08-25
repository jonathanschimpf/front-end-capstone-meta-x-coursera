import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToLocation();
  }, [pathname]);

  const scrollToLocation = () => {
    // Check if the hash is present in the URL
    if (window.location.hash) {
      // Get the target element with the hash from the URL
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash is present, scroll to the top of the page
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return null;
};

export default ScrollToTop;

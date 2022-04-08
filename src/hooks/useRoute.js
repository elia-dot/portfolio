import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
export const useRoute = () => {
  const history = useHistory();
  const [route, setRoute] = useState('home');

  useEffect(() => {
    if (history.location.pathname === '/projects') {
      setRoute('projects');
    } else if (history.location.pathname === '/contact') {
        setRoute('contact');
    } else {
      setRoute('home');
    }
  }, [history.location.pathname, window.location.href]);
  return route;
};

import React, { useState, useEffect } from 'react';

import MainContent from '../main-content/MainContent';
import Spinner from '../spinner/Spinner';

const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return <div className="main">{loading ? <Spinner /> : <MainContent />}</div>;
};

export default Main;

import { useState, useEffect } from 'react';
import getStroies from '../utils/getStroies';

const useDataFetcher = (type) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getStroies(type)
      .then(data => {
        setStories(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });

  },[type]);
  
  return {
    isLoading,
    stories
  }
}

export default useDataFetcher
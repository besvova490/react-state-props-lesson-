import { useState, useEffect } from "react";


function useFetch(fetcher) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
  
    fetcher()
      .then(resp => setResponse(resp))
      .finally(() => setIsLoading(false));
  }, []);

  return [response, isLoading];
}

export default useFetch;

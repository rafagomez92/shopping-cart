import {useState, useEffect } from 'react';


function useFetch(db, options) {
  const [ loading, setLoading ] = useState(true);
  const [ result, setResult ] = useState(null);
  const [ error, setError ] = useState(null);

  
  useEffect(() => {
      try {
          setResult(db);
          setLoading(false);
      } catch(err) {
          setError(err);
          setLoading(false);
      }
    }, [options, db]);
          
  return { loading, result, error }
}

export default useFetch;

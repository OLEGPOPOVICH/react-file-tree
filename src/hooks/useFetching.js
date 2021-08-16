import { useState } from "react"

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = async (...args) => {
    try {
      setIsLoading(true);

      if (callback) {
        await callback(...args);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, error, fetching];
}
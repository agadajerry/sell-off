import React, { useState } from "react";

export const useApi = (apiFunc: any) => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      const result = await apiFunc();
      setLoading(false);
      if (!result.ok) return setError(true);
      setData(result.data);
      setError(false);
    } catch (error) {}
  };

  return { data, error, loading, request };
};

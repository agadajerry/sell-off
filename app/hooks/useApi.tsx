import React, { useState } from "react";

export const useApi = (apiFunc: any) => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...props: any) => {
    setLoading(true);
    const result = await apiFunc(...props);

    setLoading(false);
    setError(!result.ok);
    setData(result.data);
    return result;
  };

  return { data, error, loading, request };
};

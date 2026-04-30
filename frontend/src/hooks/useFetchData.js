mport { useEffect, useState } from "react";
import { fetchData } from "../services/api";

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchData(endpoint.split("/").pop());
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchData;
import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/randomMovie", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    error,
    isLoading,
  }
};

export default useBillboard;
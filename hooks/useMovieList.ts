import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movie", fetcher, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnFocus: false
  });

  return {
    data,
    error,
    isLoading,
  }
};

export default useMovieList;
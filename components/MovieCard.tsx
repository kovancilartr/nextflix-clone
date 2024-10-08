import React, { useCallback } from "react";
import { PlayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import FavoriButton from "./FavoriButton";
import { useRouter } from "next/router";
import useInfoModalStore from "../hooks/useInfoModalStore";
import { MovieInterface } from "../types";

interface MovieCartProp {
  data: MovieInterface;
}

const MovieCard: React.FC<MovieCartProp> = ({ data }) => {
  const router = useRouter();

  const { openModal } = useInfoModalStore();

  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );
  return (
    <div className="group bg-zinc-800 col-span-1 relative h-52">
      <img
        onClick={redirectToWatch}
        src={data.thumbnailUrl}
        className="h-52 
        w-full object-cover
        shadow-xl rounded-lg
        group-hover:opacity-70
         cursor-pointer"
      />

      <div
        className="opacity-0 w-full z-20 group-hover:opacity-100
         absolute top-0 scale-0 group-hover:scale-105 invisible sm:visible"
      >
        <img
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          className="h-36 
                w-full object-cover
                shadow-xl rounded-lg
                cursor-pointer"
        />

        <div
          className="z-20 bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-lg 
            rounded-b-md"
        >
          <div className="flex flex-row items-center gap-4">
            <div
              className="bg-white
                 flex items-center justify-center rounded-full   w-7 h-7 lg:w-11 lg:h-11
                 transition 
                 border-2
                 cursor-pointer
                 border-white
                 hover:border-neutral-300"
            >
              <PlayIcon
                onClick={redirectToWatch}
                className="text-black w-4 lg:w-6"
              ></PlayIcon>
            </div>

            <div>
              <FavoriButton movieId={data.id}></FavoriButton>
            </div>

            <div
              onClick={() => openModal(data?.id)}
              className="ml-auto  flex items-center justify-center rounded-full 
                w-7 h-7 lg:w-11 lg:h-11
                 transition 
                 border-2
                 cursor-pointer"
            >
              <ChevronDownIcon className="text-white w-4 lg:w-6"></ChevronDownIcon>
            </div>
          </div>
          <p className="text-green-500 text-sm font-semibold mt-4">
            New
            <span className="ml-2 text-white">2024</span>
          </p>

          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-sm"> {data.duration}</p>
          </div>

          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-sm"> {data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

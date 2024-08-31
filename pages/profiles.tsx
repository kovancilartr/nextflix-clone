import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function profiles() {
  const { data: user } = useCurrentUser();

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <div className="text-lg text-gray-400 flex flex-col justify-center pb-4">
        <div className="flex">
          <img src="/images/logo.png" alt="" className="h-3" />
          <p className="text-3xl">Hoşgeldin</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <a className="flex flex-col items-center" href="/">
          <img
            src="/images/default-red.png"
            alt="logo"
            className="w-32 rounded-full"
          />
          <p className="text-lg text-gray-400 pt-2">{user?.name}</p>
        </a>
      </div>
    </div>
  );
}

export default profiles;

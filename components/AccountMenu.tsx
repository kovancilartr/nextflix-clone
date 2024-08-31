import React from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import { signOut } from "next-auth/react";

interface accountProps {
  visible?: boolean;
}

const AccountMenu: React.FC<accountProps> = ({ visible }) => {
  const { data: user } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-gray-950 absolute rounded-lg border-2 w-48 top-8 right-0 py-5 mt-1 flex flex-col border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group flex flex-row gap-3 items-center w-full">
          <a href="/profiles" className="flex flex-row items-center gap-3">
            <img
              className="w-8 rounded-md"
              src="/images/default-red.png"
              alt="profile"
            />

            <p className="text-white text-sm hover:underline cursor-pointer">
              {user?.name}
            </p>
          </a>
        </div>
        <hr className="bg-gray-500 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white hover:underline cursor-pointer text-sm"
        >
          Matflix'ten Çıkış Yap
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;

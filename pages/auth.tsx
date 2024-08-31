import React, { useCallback, useState } from "react";
import Input from "@/components/Input";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";
import axios from "axios";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const router = useRouter();

  const toogleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full bg-opacity-60">
        <nav className="px-12 py-6">
          <a href="/">
            <img src="/images/logo.png" alt="" className="h-12" />
          </a>
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-85 px-20 py-20 self-center mt-2 lg:w-2/5 rounded-xl w-full text-center">
            <div className="flex justify-center">
              <img src="/images/logo.png" alt="" className="h-5" />
            </div>
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  value={name}
                  label="İsim soyisim"
                  onChange={(e: any) => setName(e.target.value)}
                  type="email"
                />
              )}

              <Input
                id="email"
                value={email}
                label="Mail adresiniz"
                onChange={(e: any) => setEmail(e.target.value)}
                type="email"
              />
              <Input
                id="password"
                value={password}
                label="Şifreniz"
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md mt-10 w-full hover:bg-red-800 transition"
            >
              {variant === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </button>

            <p className="text-neutral-600 mt-12 text-center">
              {variant === "login"
                ? "Hesabınız yok mu?"
                : "Benim zaten bir hesabım var."}
              <span
                onClick={toogleVariant}
                className="text-white cursor-pointer ml-2 hover:underline translation"
              >
                {variant === "login" ? "Hesap oluştur" : "Giriş yap"}
              </span>
            </p>
          </div>
        </div>

        <footer className="text-gray-400 text-sm text-center mt-12 fixed bottom-0 w-full">
          <p>© 2024 Matflix | Kovancılar Yazılım</p>
        </footer>
      </div>
    </div>
  );
};

export default auth;

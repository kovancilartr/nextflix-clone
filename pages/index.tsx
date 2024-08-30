import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-500">
        Selam Tailwind CSS ve Next.js
      </h1>
    </>
  );
}

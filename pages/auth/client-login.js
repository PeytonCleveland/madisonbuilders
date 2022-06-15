import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Magic } from "magic-sdk";
import { useForm } from "react-hook-form"; // use your form lib of choice here
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "../../components";
import Head from "next/head";

// magic-sdk is only availabile in the browser
const magic =
  typeof window !== "undefined" &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PK || "a");

export default function ClientLogin() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email }) => {
    if (!magic) throw new Error(`magic not defined`);

    setLoading(true);

    // login with Magic
    const didToken = await magic.auth.loginWithMagicLink({ email });

    // sign in with NextAuth
    await signIn("credentials", {
      didToken,
      callbackUrl: router.query["callbackUrl"]
    });
  };

  return (
    <>
      <Head>
        <title>Client Login</title>
        <meta name="theme-color" content="#e5e7eb" />
        <meta name="description" content="Client Login" />
        <meta name="keywords" content="client, login" />
      </Head>
      <div className="flex items-center bg-gray-200 h-screen container relative">
        <Link href="/" passHref>
          <a className="absolute top-4 left-4 text-gray-900 font-semibold flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Home page
          </a>
        </Link>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 bg-white w-full rounded-3xl shadow-md flex flex-col gap-6"
        >
          <div className="flex w-full justify-center">
            <Image
              src="/madison-builders.png"
              alt="Madison Builders Logo"
              width={65}
              height={51}
            />
          </div>
          <div className="flex flex-col w-full justify-center gap-1">
            <h2 className="text-3xl text-center font-semibold">Welcome</h2>
            <p className="text-center text-gray-600">
              Enter your email to sign in or create an account.
            </p>
          </div>
          {loading ? (
            <div className="w-full py-[9px] flex justify-center">
              <Spinner />
            </div>
          ) : (
            <input
              {...register("email", { required: true })}
              placeholder="Email address"
              type="email"
              className="px-4 py-3 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500 shadow"
              onBlur={async () => {
                await new Promise((resolve) => setTimeout(resolve, 250));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          )}

          <button
            className="bg-gradient-to-br from-indigo-600 to-indigo-700 w-full py-3 shadow-md rounded-full text-white hover:bg-indigo-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            Log in / Sign up
          </button>
          <Link href="/support" passHref>
            <a className="text-indigo-600 text-center text-sm">
              Having issues? Click here
            </a>
          </Link>
        </form>
      </div>
    </>
  );
}

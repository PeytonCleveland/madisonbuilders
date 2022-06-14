import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Magic } from "magic-sdk";
import { useForm } from "react-hook-form"; // use your form lib of choice here
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "../../components";

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
    <div className="flex bg-indigo-50 pt-48 pb-32 container">
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
            className="px-4 py-3 w-full rounded-lg bg-white border border-gray-300 focus:outline-indigo-500 focus:border-indigo-500"
          />
        )}

        <button
          className="bg-indigo-500 w-full py-3 rounded-full text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          Log in / Sign up
        </button>
        <Link href="/support" passHref>
          <a className="text-indigo-500 text-center text-sm">
            Having issues? Click here
          </a>
        </Link>
      </form>
    </div>
  );
}

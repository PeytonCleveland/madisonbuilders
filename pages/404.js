import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen bg-white container flex flex-col justify-center items-center p-4 gap-2">
      <Image
        src="/404.svg"
        width={335}
        height={250}
        alt="No Found Page"
        priority
      />
      <h1 className="text-6xl text-center text-indigo-800 font-semibold">
        404
      </h1>
      <p className="text-lg text-indigo-900 font-light text-center">
        Sorry, it looks like that page is still under construction.
      </p>
      <Link href="/" passHref>
        <a>
          <button className="flex w-fit justify-center items-center bg-gradient-to-br from-indigo-700 to-indigo-800 mt-1.5 mb-8 text-white px-6 py-2 font-semibold rounded-full hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
            Take me home
          </button>
        </a>
      </Link>
    </div>
  );
};

export default PageNotFound;

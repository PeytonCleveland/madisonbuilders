import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full h-8 bg-gradient-to-br from-indigo-700 to-indigo-800 flex justify-center items-center z-50 fixed container">
      <p className="text-xs text-white font-light font-sans">
        July free plan special happening now!&nbsp;&nbsp;
      </p>
      <Link href="/promos/july-free-plan-special" passHref>
        <a className="text-xs text-teal-300 font-sans flex items-center">
          <strong>Learn more</strong>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-0.5 mt-[1px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default Banner;

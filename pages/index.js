import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Home = () => {
  return (
    <>
      <div className="container h-[500px] flex flex-col justify-end bg-white">
        <h1 className="text-indigo-900 text-3xl mb-2">
          Alabama&apos;s Premier <strong>Custom Home Builder</strong>
        </h1>
        <h2 className="text-gray-700 font-sans font-light">
          Lorem ipsum dolor sit amet consectetor adpiscing elit sed do eiusmod
        </h2>
        <div className="flex mt-6 mb-32">
          <button className="flex flex-1 mr-2 justify-center items-center border-2 border-indigo-900 text-indigo-900 px-5 py-[5px] font-semibold text-lg rounded hover:bg-indigo-800 hover:scale-105 duration-150">
            Our process
          </button>
          <button className="flex flex-1 ml-2 justify-center items-center bg-indigo-900 text-white px-5 py-[5px] font-semibold text-lg rounded hover:bg-indigo-800 hover:scale-105 duration-150">
            Let&apos;s Talk
          </button>
        </div>
      </div>

      <div className="w-screen container bg-gradient-to-br from-indigo-800 to-indigo-900 flex flex-col justify-center">
        <video
          className="-mt-12 rounded-lg mb-8"
          controls
          playsinline
          src="/stock.mov#t=0.001"
        ></video>
        <h3 className="text-white text-xl mb-2">
          Discover <strong>Our Difference</strong>
        </h3>
        <p className="text-gray-200 font-light font-sans text-sm mb-6 pr-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris.
        </p>
        <button className="w-fit bg-white text-indigo-900 px-5 py-[5px] font-semibold text-lg rounded mb-10 hover:bg-indigo-800 hover:scale-105 duration-150">
          Learn more
        </button>
      </div>

      <div className="w-screen container bg-gradient-to-br from-indigo-100 to-indigo-200 flex flex-col py-10">
        <h3 className="text-indigo-900 text-xl mb-2">
          Our <strong>Process</strong>
        </h3>
        <p className="text-gray-800 font-light font-sans text-sm mb-6 pr-8">
          Discover how Madison Builders turns your dream home into a reality.
        </p>
        <div className="flex items-center">
          <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
            <h4 className="text-xl text-indigo-900">01</h4>
          </div>
          <h3 className="text-xl text-indigo-900">
            Determine your <strong>budget</strong>
          </h3>
        </div>
        <p className="text-gray-800 font-light font-sans text-sm mt-2 ml-[54px] mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris.
        </p>
        <div className="flex items-center">
          <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
            <h4 className="text-xl text-indigo-900">02</h4>
          </div>
          <h3 className="text-xl text-indigo-900">
            Select your <strong>land</strong>
          </h3>
        </div>
        <p className="text-gray-800 font-light font-sans text-sm mt-2 ml-[54px] mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris.
        </p>
        <div className="flex items-center">
          <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
            <h4 className="text-xl text-indigo-900">03</h4>
          </div>
          <h3 className="text-xl text-indigo-900">
            Design your <strong>houseplan</strong>
          </h3>
        </div>
        <p className="text-gray-800 font-light font-sans text-sm mt-2 ml-[54px] mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris.
        </p>
        <div className="flex items-center">
          <div className="w-9 h-9 bg-indigo-300 rounded shadow flex justify-center items-center mr-4">
            <h4 className="text-xl text-indigo-900">04</h4>
          </div>
          <h3 className="text-xl text-indigo-900">
            Design your <strong>houseplan</strong>
          </h3>
        </div>
        <p className="text-gray-800 font-light font-sans text-sm mt-2 ml-[54px] mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      <div className="w-screen container bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col pt-8">
        <h3 className="text-white text-xl mb-2">
          Unmatched <strong>Transparency</strong>
        </h3>
        <p className="text-gray-200 font-light font-sans text-sm mb-4 pr-8">
          Madison Builders&apos; customer portal allows unparalleled
          transparency into the homebuilding process.
        </p>
        <Link href="/" passHref>
          <a className="mb-4 text-teal-300 flex items-center text-sm font-sans">
            Explore customer portal
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </Link>
        <h3 className="text-white mb-3">
          Choose finishes <strong>for your home</strong>
        </h3>
        <div className="w-full h-52 bg-gray-600 mb-8"></div>
        <h3 className="text-white mb-3">
          Make change orders <strong>in minutes</strong>
        </h3>
        <div className="w-full h-52 bg-gray-600 mb-8"></div>
        <h3 className="text-white mb-3">
          Easily track <strong>updates and expenses</strong>
        </h3>
        <div className="w-full h-52 bg-gray-600 -mb-10"></div>
      </div>

      <div className="container h-64 pt-20">
        <h3 className="text-indigo-900 text-xl mb-2">
          Mortgage <strong>Calculator</strong>
        </h3>
        <p className="text-gray-800 font-light font-sans text-sm mb-4 pr-8">
          Find out how much home you can afford.
        </p>
        <input
          type="text"
          className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300"
        />
      </div>
    </>
  );
};

export default Home;

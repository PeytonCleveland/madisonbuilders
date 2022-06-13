import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import Image from "next/image";
import "rc-slider/assets/index.css";
import timeSince from "../utils/time-since";

const Home = () => {
  const blogPosts = [
    {
      title:
        "Be A Pioneer In The Home Building Industry. Here's What You'll Need.",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "5 Common Mistakes Everyone Makes In Home Building.",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Blog Post 3",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Blog Post 4",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Blog Post 5",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Blog Post 6",
      date: "2022-06-10T21:35:22+0000",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const [mortgage, setMortgage] = useState({
    amount: 350_000,
    rate: 3.5,
    term: 30,
    downPayment: 25_000
  });

  const calculatePayment = () => {
    const apr = mortgage.rate / 1_200;
    const term = mortgage.term * 12;
    const loanAmount = mortgage.amount - mortgage.downPayment;
    const tax = (loanAmount * 0.0033) / 12;
    const insurance = (loanAmount * 0.0067) / 12;
    const payment =
      (loanAmount * (apr * Math.pow(1 + apr, term))) /
      (Math.pow(1 + apr, term) - 1);
    return payment + tax + insurance;
  };

  const [payment, setPayment] = useState(calculatePayment);

  useEffect(() => {
    setPayment(calculatePayment);
  }, [mortgage]);

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
          <button className="flex flex-1 mr-2 justify-center items-center border-2 border-indigo-800 text-indigo-800 px-5 py-[5px] font-semibold text-lg rounded hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
            Our Process
          </button>
          <button className="flex flex-1 ml-2 justify-center items-center bg-gradient-to-br from-indigo-800 to-indigo-900 text-white px-5 py-[5px] font-semibold text-lg rounded hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
            Let&apos;s Talk{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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
        <button className="w-fit bg-white text-indigo-900 px-5 py-[5px] font-semibold text-lg rounded mb-10 hover:bg-indigo-800 hover:scale-105 duration-150 shadow-md">
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
              className="h-5 w-5"
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

      <div className="container pt-20 pb-10">
        <h3 className="text-indigo-900 text-xl mb-2">
          Mortgage <strong>Calculator</strong>
        </h3>
        <p className="text-gray-800 font-light font-sans text-sm mb-4 pr-8">
          Find out how much home you can afford.
        </p>
        <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
          Mortgage Amount
        </label>
        <input
          type="text"
          value={`$${mortgage.amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          onChange={(e) =>
            setMortgage({
              ...mortgage,
              amount:
                parseInt(
                  e.target.value.replace(/,/g, "").replace(/\$/g, ""),
                  10
                ) || 0
            })
          }
          className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300 mb-4"
        />
        <Slider
          min={200000}
          max={1000000}
          step={5000}
          value={mortgage.amount}
          onChange={(value) =>
            setMortgage({ ...mortgage, amount: parseInt(value, 10) })
          }
          trackStyle={{ backgroundColor: "#6366f1" }}
          handleStyle={{
            backgroundColor: "white",
            border: "none",
            boxShadow: "0 0 0 2px #312e81",
            opacity: 1,
            height: "12px",
            width: "12px",
            marginTop: "-4px"
          }}
        />
        <div className="flex items-center mt-4 mb-5">
          <div className="flex flex-col w-2/3 mr-6">
            <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
              Loan Term
            </label>
            <select
              className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300"
              value={mortgage.term}
              onChange={(e) =>
                setMortgage({ ...mortgage, term: e.target.value })
              }
            >
              <option value="30">30 Years</option>
              <option value="15">15 Years</option>
              <option value="10">10 Years</option>
            </select>
          </div>

          <div className="flex flex-col w-1/3">
            <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
              Interest Rate
            </label>
            <div className="flex items-center relative">
              <input
                type="text"
                value={mortgage.rate}
                onChange={(e) =>
                  setMortgage({
                    ...mortgage,
                    rate: e.target.value
                  })
                }
                className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300 group"
              />
              <h4 className="text-lg text-gray-500 font-sans rounded-r-lg h-10 flex items-center absolute right-3">
                %
              </h4>
            </div>
          </div>
        </div>

        <label className="block text-indigo-900 font-light font-sans text-sm mb-2">
          Down Payment
        </label>
        <input
          type="text"
          value={`$${mortgage.downPayment
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          onChange={(e) =>
            setMortgage({
              ...mortgage,
              downPayment:
                parseInt(
                  e.target.value.replace(/,/g, "").replace(/\$/g, ""),
                  10
                ) || 0
            })
          }
          className="w-full h-10 px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:bg-gray-300 mb-4"
        />
        <Slider
          min={0}
          max={mortgage.amount}
          step={5000}
          value={mortgage.downPayment}
          onChange={(value) =>
            setMortgage({ ...mortgage, downPayment: parseInt(value, 10) })
          }
          trackStyle={{ backgroundColor: "#6366f1" }}
          handleStyle={{
            backgroundColor: "white",
            border: "none",
            boxShadow: "0 0 0 2px #312e81",
            opacity: 1,
            height: "12px",
            width: "12px",
            marginTop: "-4px"
          }}
        />

        <div className="bg-indigo-100 p-5 pt-[19px] rounded-md mt-6 shadow-md flex flex-col items-center">
          <label className="block text-indigo-900 text-sm mb-1">
            Monthly Payment
          </label>
          <h5 className="text-4xl">
            $
            {payment
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 w-full container pt-12 pb-14">
        <h3 className="text-white text-xl mb-4">
          Explore Our <strong>Blog</strong>
        </h3>
        <div className="snap-x mx-auto snap-mandatory flex w-full overflow-scroll">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="snap-start bg-indigo-200 w-3/4 flex-shrink-0 h-[330px] mr-6 flex flex-col items-center justify-between shadow-md rounded-lg overflow-hidden"
            >
              <div className="flex w-full h-40 min-h-[160px] relative">
                <Image src={post.image} layout="fill" />
              </div>
              <div className="flex flex-col w-full h-full p-5 justify-between">
                <div className="flex flex-col">
                  <h4 className="text-base">{post.title}</h4>
                  <p className="text-xs text-gray-700 font-sans">
                    {timeSince(post.date)}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-indigo-900 font-semibold mr-2">
                    Tags:
                  </p>
                  <p className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-md flex items-center mr-1">
                    Smart Home
                  </p>
                  <p className="text-xs font-sans">+3 More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
